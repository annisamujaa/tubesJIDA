
import Image from 'next/image';
import { fetchMenu } from '@/lib/data';

export default async function Menu() {
  const menus = await fetchMenu();

  return (
    <main className="min-h-screen">
      <section className='py-5'>
        <h1 className='text-2xl font-bold text-center'>Pilih Menu</h1>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="flex flex-wrap justify-center gap-8">
            {menus.map((menu: any) => (
              <div
                key={menu.name}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60"
              >
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{menu.name}</h3>
                <p className="text-sm text-gray-500 flex-1 text-center">{menu.description}</p>
                <div className="mt-auto w-full flex justify-center">
                  <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600 w-full">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}