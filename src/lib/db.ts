// db.ts
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
};

let dbReady: Promise<void> | null = null;

const initDB = async () => {
  await query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  await query(`
    CREATE TABLE IF NOT EXISTS public.project_listings (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title VARCHAR(255) NOT NULL,
      thumbnail TEXT NOT NULL,
      icon TEXT NOT NULL,
      description TEXT NOT NULL,
      demo_link TEXT,
      github_link TEXT,
      figma_link TEXT,
      stack TEXT[] NOT NULL,
      category TEXT[] NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("✅ ProjectListings table is ready");
};

// ensure init only runs once per cold start
export const ensureDB = async () => {
  if (!dbReady) {
    dbReady = initDB();
  }
  await dbReady;
};
