import { Pool } from 'pg'

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

// Helper functions for user operations
export const db = {
  // Find user by email
  async findUserByEmail(email) {
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      )
      return result.rows[0] || null
    } catch (error) {
      console.error('Error finding user by email:', error)
      throw error
    }
  },

  // Create new user
  async createUser({ name, email, password = '', googleId = null }) {
    try {
      const result = await pool.query(
        `INSERT INTO users (name, email, password, google_id, updated_at) 
         VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) 
         RETURNING *`,
        [name, email, password, googleId]
      )
      return result.rows[0]
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  },

  // Get all users (for debugging)
  async getAllUsers() {
    try {
      const result = await pool.query(
        'SELECT id, name, email, google_id, created_at FROM users ORDER BY created_at DESC'
      )
      return result.rows
    } catch (error) {
      console.error('Error getting all users:', error)
      throw error
    }
  },

  // Get user by ID
  async findUserById(id) {
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE id = $1',
        [id]
      )
      return result.rows[0] || null
    } catch (error) {
      console.error('Error finding user by ID:', error)
      throw error
    }
  },

  // Update user
  async updateUser(id, data) {
    try {
      const fields = Object.keys(data)
      const values = Object.values(data)
      const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(', ')
      
      const result = await pool.query(
        `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
        [id, ...values]
      )
      return result.rows[0]
    } catch (error) {
      console.error('Error updating user:', error)
      throw error
    }
  }
}

export default pool