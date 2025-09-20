import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { db } from "../../../lib/db"

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' }, 
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      )
    }

    // Password validation
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' }, 
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await db.findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' }, 
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await db.createUser({
      name,
      email,
      password: hashedPassword,
      googleId: null
    })

    return NextResponse.json(
      { 
        message: 'User created successfully', 
        userId: user.id,
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email,
          createdAt: user.created_at
        }
      }, 
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}