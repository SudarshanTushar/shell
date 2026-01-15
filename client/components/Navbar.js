import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-ind-blue border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 text-white text-2xl font-bold tracking-tighter">
            IND<span className="text-brand-orange">COMP</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Home</Link>
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">About Us</Link>
              <Link href="#products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Inventory</Link>
              <Link href="#contact" className="bg-brand-orange hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-bold uppercase transition shadow-lg shadow-orange-900/40">
                Contact Owner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
