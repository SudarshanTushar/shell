import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen bg-ind-blue overflow-hidden">
      {/* Background - Industrial Plant Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/compressor-plant.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded bg-ind-accent/20 text-ind-accent text-sm font-bold tracking-widest border border-ind-accent/50 mb-4">
              ENGINEERED FOR EFFICIENCY
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              India’s Most Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                Industrial Air Systems
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Heavy-duty Screw Compressors, Dryers, and Piping for 24/7 manufacturing. 
              Cut energy costs by up to <span className="text-white font-bold">35%</span>.
            </p>
            
            <div className="mt-10 flex gap-4">
              <Link href="/contact" className="px-8 py-4 bg-brand-orange hover:bg-orange-700 text-white font-bold rounded-sm uppercase tracking-wide transition-all shadow-lg shadow-orange-900/50">
                Get Industrial Quote
              </Link>
              <Link href="/products" className="px-8 py-4 border border-gray-500 text-gray-300 hover:text-white hover:border-white font-bold rounded-sm uppercase tracking-wide transition-all">
                View Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Trust Bar */}
      <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400 px-6">
          <span>TRUSTED BY:</span>
          <div className="flex gap-8 grayscale opacity-70">
            {/* Insert SVG Logos for Tata, Reliance, Pharma Clients */}
            <img src="/logos/auto.svg" className="h-8" alt="Auto" />
            <img src="/logos/pharma.svg" className="h-8" alt="Pharma" />
            <img src="/logos/steel.svg" className="h-8" alt="Steel" />
          </div>
        </div>
      </div>
    </div>
  );
}
