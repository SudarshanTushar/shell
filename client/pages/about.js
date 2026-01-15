import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Head><title>About Us | Shell Compressor</title></Head>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ind-blue mt-2 mb-6">Powering Production since 2026</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Shell Compressor is an authorized industrial stockist based in Pune, Maharashtra. We don't just supply machines; we provide the heartbeat of your factory.
          </p>
          <div className="space-y-4 mb-8">
             <div className="flex items-start">
               <span className="text-brand-orange font-bold mr-2">✓</span>
               <p className="text-gray-600"><strong>Leadership:</strong> Directed by Mr. Tushar Shinde, bringing years of technical expertise to the table.</p>
             </div>
             <div className="flex items-start">
               <span className="text-brand-orange font-bold mr-2">✓</span>
               <p className="text-gray-600"><strong>Mission:</strong> To provide Indian MSMEs with heavy-duty air systems that have Zero Downtime.</p>
             </div>
          </div>
          <Link href="/contact" className="inline-block border-2 border-ind-blue text-ind-blue font-bold py-3 px-8 rounded hover:bg-ind-blue hover:text-white transition">
            Speak to Management
          </Link>
        </div>
        <div className="h-96 bg-gray-100 rounded-2xl overflow-hidden relative">
           {/* Replace with your shop/office image */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
             [Company / Warehouse Image]
           </div>
        </div>
      </div>
    </div>
  );
}
