import Image from 'next/image';

const team = [
  {
    name: 'Andi',
    role: 'Head Office',
    img: '/profile1.jpg',
  },
  {
    name: 'Rina',
    role: 'Manager',
    img: '/profile2.jpg',
  },
  {
    name: 'Siska',
    role: 'Staff',
    img: '/profile3.jpg',
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className='py-10'>
        <h1 className='text-2xl font-bold text-center'>Pilih Menu</h1>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-60"
              >
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}