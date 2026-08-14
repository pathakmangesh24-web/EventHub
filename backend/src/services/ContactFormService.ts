import type { Pool } from 'mysql2/promise';
import { DatabaseConnection } from '../config/database.js';
import type { ContactFormData } from '../types/form.js';

export class ContactFormService {
  /**
   * Save contact form submission to database
   */
  static async saveSubmission(data: ContactFormData): Promise<{ id: number; success: boolean }> {
    try {
      const pool = await DatabaseConnection.getConnection();
      const connection = await pool.getConnection();

      try {
        const query = `
          INSERT INTO contact_submissions (first_name, last_name, email, message, created_at)
          VALUES (?, ?, ?, ?, NOW())
        `;

        const [result] = await connection.execute(query, [
          data.firstName,
          data.lastName,
          data.email,
          data.message,
        ]);

        const insertResult = result as any;
        return {
          id: insertResult.insertId,
          success: true,
        };
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error saving form submission:', error);
      throw error;
    }
  }

  /**
   * Get all submissions
   */
  static async getAllSubmissions(): Promise<ContactFormData[]> {
    try {
      const pool = await DatabaseConnection.getConnection();
      const connection = await pool.getConnection();

      try {
        const query = `
          SELECT id, first_name as firstName, last_name as lastName, email, message, created_at
          FROM contact_submissions
          ORDER BY created_at DESC
        `;

        const [rows] = await connection.execute(query);
        return rows as ContactFormData[];
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      throw error;
    }
  }

  /**
   * Get submission by ID
   */
  static async getSubmissionById(id: number): Promise<ContactFormData | null> {
    try {
      const pool = await DatabaseConnection.getConnection();
      const connection = await pool.getConnection();

      try {
        const query = `
          SELECT id, first_name as firstName, last_name as lastName, email, message, created_at
          FROM contact_submissions
          WHERE id = ?
        `;

        const [rows] = await connection.execute(query, [id]);
        const result = rows as any[];
        return result.length > 0 ? result[0] : null;
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error fetching submission:', error);
      throw error;
    }
  }

  /**
   * Delete submission
   */
  static async deleteSubmission(id: number): Promise<boolean> {
    try {
      const pool = await DatabaseConnection.getConnection();
      const connection = await pool.getConnection();

      try {
        const query = 'DELETE FROM contact_submissions WHERE id = ?';
        const [result] = await connection.execute(query, [id]);

        const deleteResult = result as any;
        return deleteResult.affectedRows > 0;
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      throw error;
    }
  }
}
