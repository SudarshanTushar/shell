import Head from 'next/head';
import Navbar from '../components/Navbar';
import LeadForm from '../components/LeadForm';
import EnergyAudit from '../components/EnergyAudit';

// --- INVENTORY DATA ---
const PRODUCTS = [
  { 
    id: "cp-10-ts",
    model: "CP 10 TS",
    title: "10HP Belt Driven Compressor", 
    image: "/assets/products/cp10.jpg",
    desc: "Heavy-duty Shell industrial unit. Ideal for high-demand manufacturing setups.",
    specs: [
      { label: "Motor", val: "10 HP (415V)" },
      { label: "Tank", val: "500 Liters" },
      { label: "Flow", val: "35 CFM" },
      { label: "Pressure", val: "175 PSI" }
    ],
    price: "₹98,000",
    gst: "+ GST"
  },
  { 
    id: "cp-07-ts",
    model: "CP 07 TS",
    title: "7.5HP Industrial Piston", 
    image: "/assets/products/cp07.jpg",
    desc: "Optimized for medium industrial loads with high reliability.",
    specs: [
      { label: "Motor", val: "7.5 HP (415V)" },
      { label: "Tank", val: "300 Liters" },
      { label: "Flow", val: "24.8 CFM" },
      { label: "Pressure", val: "175 PSI" }
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
      { label: "Pressure", val: "175 PSI" }
    ],
    price: "₹60,000",
    gst: "+ GST"
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans scroll-smooth">
      <Head>
        <title>Shell Compressor | Industrial Efficiency Systems</title>
        <meta name="description" content="Stop energy loss. Upgrade to Shell Industrial Compressors." />
      </Head>

      <Navbar />

      {/* 1. HERO SECTION WITH AUDIT ENGINE */}
      <header className="relative bg-ind-blue text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-brand-orange border border-brand-orange/50 uppercase rounded-full bg-brand-orange/10">
              Authorized Stockist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Is Your Compressor <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                Burning Profit?
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Old pneumatic systems bleed up to 30% of your power bill. 
              Upgrade to <strong>Shell Industrial</strong> for maximum efficiency.
            </p>
            
            <div className="flex gap-8 text-sm font-bold text-gray-400">
              <div className="flex flex-col">
                <span className="text-3xl text-white">20+</span>
                <span>Years Life</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-white">40%</span>
                <span>Less Heat</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl text-white">24/7</span>
                <span>Duty Cycle</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full max-w-md mx-auto lg:ml-auto">
            {/* INJECTING THE WEAPON */}
            <EnergyAudit />
          </div>
        </div>
      </header>

      {/* 2. FEATURE 4: COMPETITOR COMPARISON (ANCHORING) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-ind-blue">Why Upgrade to Shell?</h2>
            <p className="text-gray-500 mt-4">See where your current generic unit fails.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-red-50 rounded-xl border border-red-100 opacity-70 grayscale hover:grayscale-0 transition duration-500">
              <h3 className="text-xl font-bold text-gray-500 mb-4">Generic Brands</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-center text-red-600">
                  <span className="mr-2">⚠</span> High RPM (More Heat)
                </li>
                <li className="flex items-center text-red-600">
                  <span className="mr-2">⚠</span> Aluminium Windings (Risk)
                </li>
                <li className="flex items-center text-red-600">
                  <span className="mr-2">⚠</span> 30% Pressure Drop
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl border-t-4 border-brand-orange transform scale-105 z-10">
              <div className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">The Shell Standard</div>
              <h3 className="text-2xl font-bold text-ind-blue mb-6">Shell Industrial</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                  100% Copper Windings
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                  Low RPM (Cool Running)
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                  Cast Iron Heavy Duty Block
                </li>
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-ind-blue mb-4">Reconditioned / Used</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-center text-gray-500">
                  <span className="mr-2">?</span> Unknown History
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="mr-2">?</span> No Warranty Support
                </li>
                <li className="flex items-center text-red-500">
                  <span className="mr-2">⚠</span> Hidden Power Surge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INVENTORY GRID */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-4 bg-slate-50">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Our Inventory</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ind-blue mt-2">Shell Piston Compressors</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col group">
              <div className="h-64 bg-white border-b border-gray-100 relative">
                 <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.parentNode.innerHTML = '<div class="flex items-center justify-center h-full text-gray-300 font-bold text-sm">Image Pending</div>';
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-ind-blue mb-2">{item.title}</h3>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-6 bg-slate-50 p-3 rounded">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between col-span-2 border-b border-slate-200 last:border-0 py-1">
                      <span className="font-bold">{spec.label}:</span>
                      <span>{spec.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs text-gray-400 font-bold block">Best Price</span>
                    <span className="text-2xl font-extrabold text-brand-orange">{item.price}</span>
                  </div>
                  <a href="#contact" className="text-ind-blue font-bold text-sm uppercase border-b-2 border-brand-orange pb-1">Enquire Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="relative py-24 bg-ind-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-extrabold mt-2 mb-8">Ready to Upgrade?</h2>
            <p className="text-gray-400 text-lg mb-12">
              For direct orders or technical queries, contact our sales desk.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-orange/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Direct Sales Line</h4>
                  <p className="text-2xl font-bold text-white mt-1">+91 90288 60430</p>
                  <p className="text-brand-orange text-sm font-bold uppercase mt-1">Mr. Tushar Shinde (Sales Director)</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="flex-shrink-0 bg-brand-orange/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Email Support</h4>
                  <p className="text-gray-400 mt-1">sales@shellcompressor.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-1">
             <LeadForm /> 
          </div>

        </div>
      </section>

      <footer className="bg-slate-900 text-gray-500 py-12 border-t border-gray-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-bold text-lg">Shell Compressor</span>
            <p className="mt-2">Trusted Industrial Partner since 2026.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-orange transition">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition">Terms of Service</a>
          </div>
          <div className="mt-4 md:mt-0">
            © 2026 Tushar Shinde Enterprises.
          </div>
        </div>
      </footer>
    </div>
  );
}
