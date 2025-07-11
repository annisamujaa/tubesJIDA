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
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
          About
        </h1>
      </section>

      <section className="mx-12 py-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">About</h2>
        <p className="mb-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae adipisci similique veniam consectetur quae, incidunt velit quo totam delectus dolore quas architecto rerum ipsa alias corporis non provident tempora!
        </p>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Visi & Misi</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, at veniam deleniti necessitatibus voluptas blanditiis ex quaerat ea ratione autem omnis pariatur magni, consequatur earum et officiis libero laborum? Illum.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis minima possimus, facilis maxime officia ratione eveniet nemo optio? Ex deleniti dignissimos exercitationem quis nemo, at in rem odio soluta inventore?
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-blue-600 text-center">Tim Kami</h2>
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
        </div>
      </section>
    </main>
  );
}