"use client"
import { useParams } from 'next/navigation';

export default function Produtos() {

    const params = useParams();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="bg-sky-200">
        <p className="text-sky-500 text-2xl ">Detalhes do Produto #{params.id}</p>
    </div>
    </main>
  );
}