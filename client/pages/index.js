import Head from 'next/head';
import Navbar from '../components/Navbar';
import LeadForm from '../components/LeadForm';

// --- REAL INVENTORY DATA ---
const PRODUCTS = [
  { 
    id: "cp-10-ts",
    model: "CP 10 TS",
    title: "10HP Belt Driven Compressor", 
    image: "/assets/products/cp10.jpg",
    desc: "Heavy-duty Shell industrial unit. Ideal for high-demand manufacturing setups.",
    // Key Specs extracted from your data
    specs: [
      { label: "Motor", val: "10 HP (415V)" },
      { label: "Tank", val: "500 Liters" },
      { label: "Flow", val: "35 CFM" },
      { label: "Pressure", val: "175 PSI / 12kg" }
    ],
    price: "₹98,000",
    gst: "+ GST"
  },
  { 
    id: "cp-07-ts",
    model: "CP 07 TS",
    title: "7.5HP Industrial Piston", 
    image: "/assets/products/cp07.jpg", // Ensure you save the image with this name
    desc: "Optimized for medium industrial loads with high reliability.",
    specs: [
      { label: "Motor", val: "7.5 HP (415V)" },
      { label: "Tank", val: "300 Liters" },
      { label: "Flow", val: "24.8 CFM" },
      { label: "Pressure", val: "175 PSI / 12kg" }
    ],
    price: "₹75,000",
    gst: "+ GST"
  },
  { 
    id: "cp-05-ts",
    model: "CP 05 TS",
    title: "5HP Workshop Compressor", 
    image: "/assets/products/cp05.jpg",
    desc: "Compact powerhouse for garages, small workshops, and pneumatic tools.",
    specs: [
      { label: "Motor", val: "5 HP (415V)" },
      { label: "Tank", val: "250 Liters" },
      { label: "Flow", val: "17.7 CFM" },
      { label: "Pressure", val: "175 PSI / 12kg" }
    ],
    price: "₹60,000",
    gst: "+ GST"
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Head>
        <title>Shell Compressors India | Direct Dealer Pricing</title>
        <meta name="description" content="Authorized dealer for Shell Make Belt Driven Piston Air Compressors. Best rates for 5HP, 7.5HP, and 10HP models." />
      </Head>

      <Navbar />

      {/* HERO SECTION */}
      <header className="relative bg-ind-blue text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-brand-orange border border-brand-orange/50 uppercase">
              Authorized Stockist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Industrial Air <br/>
              <span className="text-brand-orange">Done Right.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Premium Shell Make Piston Compressors. 
              <span className="text-white font-bold"> 100% Copper Wound Motors</span>, heavy-duty tanks, and 1-Year comprehensive warranty.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <span className="flex items-center gap-2">
                <span className="text-brand-orange">✓</span> Factory Direct Rates
              </span>
              <span className="flex items-center gap-2">
                <span className="text-brand-orange">✓</span> Ready Stock
              </span>
            </div>
          </div>
          
          <div id="contact" className="relative z-10">
            <LeadForm />
          </div>
        </div>
      </header>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Current Inventory</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ind-blue mt-2">Best Sellers</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col relative group">
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-ind-blue text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                {item.model}
              </div>

              {/* Image Container */}
              <div className="h-64 bg-gray-100 overflow-hidden relative border-b border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.parentNode.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 font-bold bg-gray-50">Upload Image: ' + item.image + '</div>';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-ind-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {item.desc}
                </p>
                
                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {item.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">{spec.label}</span>
                      <span className="block text-sm font-bold text-slate-700">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs text-gray-400 font-bold block">Exclusive Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-brand-orange">{item.price}</span>
                      <span className="text-xs text-gray-500 font-bold">{item.gst}</span>
                    </div>
                  </div>
                  <a href="#contact" className="bg-ind-blue hover:bg-slate-800 text-white p-3 rounded-lg transition shadow-lg shadow-blue-900/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-ind-blue text-white py-12 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Authorized Industrial Dealer. All specifications subject to change.
          </p>
        </div>
      </footer>
    </div>
  );
}
