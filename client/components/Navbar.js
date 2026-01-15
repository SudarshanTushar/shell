import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ind-blue border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-white text-xl md:text-2xl font-bold tracking-tighter">
            SHELL <span className="text-brand-orange">COMPRESSOR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">About Us</Link>
              <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Inventory</Link>
              <Link href="/contact" className="bg-brand-orange hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-bold uppercase transition shadow-lg shadow-orange-900/40">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-ind-blue border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">About Us</Link>
            <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Inventory</Link>
            <Link href="/contact" className="text-brand-orange hover:text-white block px-3 py-2 rounded-md text-base font-bold uppercase">Contact Sales</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
