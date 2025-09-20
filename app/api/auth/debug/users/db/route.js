import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const users = await db.getAllUsers()
    
    return NextResponse.json({
      totalUsers: users.length,
      users: users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        hasPassword: !!user.password,
        googleId: user.google_id,
        createdAt: user.created_at
      }))
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' }, 
      { status: 500 }
    )
  }
}