import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { db } from "../../../../lib/db"

// Dev-only: ensure a test user exists so we can verify credentials flow quickly
;(async function ensureDevUser() {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const testEmail = 'test@example.com'
      const existing = await db.findUserByEmail(testEmail)
      if (!existing) {
        const hashed = await bcrypt.hash('password', 12)
        const created = await db.createUser({
          name: 'Test User',
          email: testEmail,
          password: hashed,
          googleId: null
        })
        console.log('Dev test user created:', created.email)
      } else {
        // optional: log existence
        console.log('Dev test user already exists:', existing.email)
      }
    }
  } catch (e) {
    console.error('Error ensuring dev user:', e)
  }
})()

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const { username, password } = credentials

        try {
          const user = await db.findUserByEmail(username)
          if (!user) {
            console.log('User not found:', username)
            return null
          }

          if (!user.password) {
            console.log('User has no password (Google user):', username)
            return null
          }

          const isValid = await bcrypt.compare(password, user.password)
          if (!isValid) {
            console.log('Invalid password for user:', username)
            return null
          }

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          }
        } catch (error) {
          console.error("Authorization error:", error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          // Check if user exists
          const existingUser = await db.findUserByEmail(user.email)
          
          if (!existingUser) {
            // Create new Google user
            console.log('Creating new Google user:', user.email)
            await db.createUser({
              name: user.name || "",
              email: user.email,
              password: "", // Google users don't have password
              googleId: user.id
            })
          } else {
            console.log('Google user already exists:', user.email)
          }
          return true
        } catch (error) {
          console.error("Error with Google sign in:", error)
          return false
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        try {
          // Get user from database to get the real database ID
          const dbUser = await db.findUserByEmail(user.email)
          if (dbUser) {
            token.id = dbUser.id.toString()
          }
        } catch (error) {
          console.error("JWT callback error:", error)
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }