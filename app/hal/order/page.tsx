
export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
          Contact Us
        </h1>
      </section>

      <section className="mx-12 py-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Email</h2>
        <div className="">kirim email 
          <a className="text-blue-500" href="mailto:someone@example.com"> disini</a>
        </div>
      </section>
    </main>
  );
}