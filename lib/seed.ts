import postgres from 'postgres';
import { menus } from './placeholder-data';

export async function seedMenus() {
  for (const menu of menus) {
    await postgres(process.env.POSTGRES_URL!, { ssl: 'require' })`
      INSERT INTO menus (id, name, description, image)
      VALUES (${menu.id}, ${menu.name}, , ${menu.description}, ${menu.image})
    `;
  }

  console.log('✅ Data berhasil dimasukkan ke tabel menus.');
}
