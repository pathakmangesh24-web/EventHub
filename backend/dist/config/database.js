import mysql from 'mysql2/promise';
export class DatabaseConnection {
    static instance;
    static config;
    static setConfig(config) {
        this.config = config;
    }
    static async getConnection() {
        if (!this.instance) {
            if (!this.config) {
                throw new Error('Database config not set. Call setConfig() first.');
            }
            this.instance = mysql.createPool(this.config);
            console.log(`✓ MySQL Connected to database: ${this.config.database}`);
        }
        return this.instance;
    }
    static async closeConnection() {
        if (this.instance) {
            await this.instance.end();
            console.log('✓ MySQL Connection closed');
        }
    }
    static async testConnection() {
        try {
            const connection = await this.getConnection();
            const poolConnection = await connection.getConnection();
            await poolConnection.ping();
            poolConnection.release();
            console.log('✓ MySQL Connection test successful');
            return true;
        }
        catch (error) {
            console.error('✗ MySQL Connection test failed:', error);
            return false;
        }
    }
}
//# sourceMappingURL=database.js.map