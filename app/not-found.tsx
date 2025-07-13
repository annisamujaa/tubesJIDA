// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="mb-6 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}