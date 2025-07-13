import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover">
        </Image>
      </section>
    </main>
    
  )
}