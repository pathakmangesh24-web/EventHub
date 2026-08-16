import pool from '../db.js';

export async function createRegistration(data: {
  first_name: string;
  last_name: string;
  email: string;
  comments_questions?: string | null;
  special_requests?: string | null;
}): Promise<number> {
  const sql = `INSERT INTO event_registrations (first_name, last_name, email, comments_questions, special_requests) VALUES (?, ?, ?, ?, ?)`;
  const [result]: any = await pool.execute(sql, [
    data.first_name,
    data.last_name,
    data.email,
    data.comments_questions ?? null,
    data.special_requests ?? null,
  ]);
  return result.insertId as number;
}

export async function getRegistrations(opts: { limit?: number; offset?: number } = {}): Promise<any[]> {
  const limit = Number(opts.limit ?? 100);
  const offset = Number(opts.offset ?? 0);
  const sql = `SELECT id, first_name, last_name, email, comments_questions, special_requests, created_at FROM event_registrations ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
  const [rows]: any = await pool.query(sql);
  return rows;
}
