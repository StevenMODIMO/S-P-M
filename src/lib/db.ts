import { Pool } from "pg";

const connectionString = "";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "modimo",
  password: "Biko.2022!!",
  port: 5432,
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();

  try {
    const res = await client.query(text, params);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Database query failed");
  } finally {
    client.release();
  }
};

const initDB = async () => {
  try {
    await query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    await query(`
    CREATE TABLE IF NOT EXISTS project_listings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
  } catch (error) {
    console.error(error);
  }
};

initDB();
