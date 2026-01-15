import Head from 'next/head';
import Navbar from '../components/Navbar';
import EnergyAudit from '../components/EnergyAudit';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Head>
        <title>Shell Compressor | Industrial Efficiency Systems</title>
      </Head>

      <Navbar />

      {/* HERO & CALCULATOR */}
      <header className="relative bg-ind-blue text-white py-12 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-brand-orange border border-brand-orange/50 uppercase rounded-full bg-brand-orange/10">
              Authorized Stockist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Is Your Compressor <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                Burning Profit?
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Stop 30% energy bleed. Upgrade to <strong>Shell Industrial</strong> systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products" className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded uppercase tracking-wide transition">
                View Inventory
              </Link>
              <Link href="/contact" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-8 rounded uppercase tracking-wide transition">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-md mx-auto lg:ml-auto">
            <EnergyAudit />
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-extrabold text-ind-blue mb-12">Why Industry Leaders Choose Shell</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="font-bold text-xl mb-2">Cool Running</h3>
                <p className="text-gray-600">Low RPM design prevents overheating during 24/7 cycles.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="font-bold text-xl mb-2">100% Copper</h3>
                <p className="text-gray-600">Genuine copper wound motors for maximum longevity.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-xl mb-2">Service Promise</h3>
                <p className="text-gray-600">Direct technical support from our senior engineering team.</p>
              </div>
           </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-500 py-12 border-t border-gray-800 text-center text-sm">
        © 2026 Shell Compressor. All rights reserved.
      </footer>
    </div>
  );
}
