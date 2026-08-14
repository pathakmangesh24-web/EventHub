import Fastify from 'fastify';
import dotenv from 'dotenv';
import { contactRoutes } from './routes/contactRoutes.js';
import { DatabaseConnection } from './config/database.js';
import dbConfig from './config/env.js';

dotenv.config();

const fastify = Fastify({ logger: true });

// Register routes
fastify.register(contactRoutes);

// Health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

// Start server
const start = async () => {
  try {
    // Initialize database connection
    DatabaseConnection.setConfig(dbConfig as any);
    const isConnected = await DatabaseConnection.testConnection();

    if (!isConnected) {
      console.error('Failed to connect to database');
      process.exit(1);
    }

    const port = parseInt(process.env.PORT || '3000');
    const host = process.env.HOST || '0.0.0.0';

    await fastify.listen({ port, host });
    console.log(`Server running at http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
