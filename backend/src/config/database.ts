import mysql from 'mysql2/promise';
import type { Pool, PoolOptions } from 'mysql2/promise';

interface DatabaseConfig extends PoolOptions {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

export class DatabaseConnection {
  private static instance: Pool;
  private static config: DatabaseConfig;

  static setConfig(config: DatabaseConfig): void {
    this.config = config;
  }

  static async getConnection(): Promise<Pool> {
    if (!this.instance) {
      if (!this.config) {
        throw new Error('Database config not set. Call setConfig() first.');
      }

      this.instance = mysql.createPool(this.config);
      console.log(`✓ MySQL Connected to database: ${this.config.database}`);
    }
    return this.instance;
  }

  static async closeConnection(): Promise<void> {
    if (this.instance) {
      await this.instance.end();
      console.log('✓ MySQL Connection closed');
    }
  }

  static async testConnection(): Promise<boolean> {
    try {
      const connection = await this.getConnection();
      const poolConnection = await connection.getConnection();
      await poolConnection.ping();
      poolConnection.release();
      console.log('✓ MySQL Connection test successful');
      return true;
    } catch (error) {
      console.error('✗ MySQL Connection test failed:', error);
      return false;
    }
  }
}
