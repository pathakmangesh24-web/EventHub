import type { Pool, PoolOptions } from 'mysql2/promise';
interface DatabaseConfig extends PoolOptions {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
}
export declare class DatabaseConnection {
    private static instance;
    private static config;
    static setConfig(config: DatabaseConfig): void;
    static getConnection(): Promise<Pool>;
    static closeConnection(): Promise<void>;
    static testConnection(): Promise<boolean>;
}
export {};
//# sourceMappingURL=database.d.ts.map