import postgres from "postgres";
import {
  Menu
} from './definition';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchMenu() {
  try {
    const data = await sql<Menu[]>`SELECT * FROM menu`;
    console.log('✅ HASIL DARI DATABASE:', data);
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}