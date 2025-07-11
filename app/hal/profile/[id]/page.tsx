type Props = {
  params: {
    id: string;
  };
};

export default function ProfileDetail({ params }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-blue-600">
        Ini halaman detail profile ID: {params.id}
      </h1>
    </main>
  );
}
