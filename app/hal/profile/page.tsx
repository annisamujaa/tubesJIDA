// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
 
const profile = [
  {
    id: 1,
    name: 'Annisa Muja Ahidah',
    role: 'Staff',
    img: '/profile3.jpg',
  },
];

  return (
    <main className="min-h-screen">
      <section>
        <h1 className='text-2xl font-bold my-10 text-blue-600 text-center'>Profile</h1>
      </section>
      <section>
        <div>
            {profile.map((profil) =>
            <div
                key={profil.name}
                className="rounded-xl shadow-md p-6 flex flex-col items-center mx-15 bg-blue-400"
            >
            <div className="w-24 h-24 relative mb-4">
                <Image
                    src={profil.img}
                    alt={profil.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-white">{profil.name}</h3>
                <p className="text-white">{profil.role}</p>
                <Link href={`/hal/profile/${profil.id}`}>
                  <button className="bg-white text-blue-500 px-4 py-1 my-2 rounded">
                    Lihat Profile
                  </button>
                </Link>
              </div>
            )}
        </div>
      </section>
    </main>
  );
}