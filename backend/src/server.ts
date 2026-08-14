import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import db from "./config/db.js"

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    message: "EventHub Backend Running",
  };
});

async function startServer() {
  try {
    await db.query("SELECT 1");

    console.log("✅ Database connected successfully");

    await app.listen({
      port: Number(process.env.PORT) || 3000,
      host: "0.0.0.0",
    });

    console.log("🚀 Server running");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

startServer();