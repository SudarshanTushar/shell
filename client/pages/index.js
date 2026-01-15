import Head from 'next/head';
import Navbar from '../components/Navbar';
import LeadForm from '../components/LeadForm';

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
        <title>Shell Compressor | Authorized Industrial Dealer</title>
        <meta name="description" content="Authorized dealer for Shell Make Belt Driven Piston Air Compressors in Pune. Contact Tushar Shinde for best rates." />
      </Head>

      <Navbar />

      {/* 1. HERO SECTION */}
      <header className="relative bg-ind-blue text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-brand-orange border border-brand-orange/50 uppercase rounded-full bg-brand-orange/10">
            Authorized Stockist
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Shell Industrial<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
              Compressors
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            We supply premium Shell Piston Compressors to factories across Maharashtra. 
            Direct dealer margins passed to you.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#products" className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded uppercase tracking-wide transition shadow-lg shadow-orange-900/50">
              View Catalog
            </a>
            <a href="#contact" className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold py-4 px-8 rounded uppercase tracking-wide transition">
              Contact Sales
            </a>
          </div>
        </div>
      </header>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ind-blue mt-2 mb-6">Powering Your Production</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At <span className="font-bold text-ind-blue">Shell Compressor</span>, we don't just sell boxes; we power production lines. 
              Led by <span className="font-bold text-ind-blue">Mr. Tushar Shinde</span>, our mission is to eliminate downtime for Indian MSMEs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in <strong>Shell Make</strong> compressors because they offer the perfect balance of 
              rugged durability and cost-efficiency. Every unit sold comes with our personal guarantee of service.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 border-l-4 border-brand-orange rounded">
                <h4 className="font-bold text-ind-blue">100% Genuine</h4>
                <p className="text-sm text-gray-500">Factory direct units with serial number tracking.</p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-brand-orange rounded">
                <h4 className="font-bold text-ind-blue">Rapid Support</h4>
                <p className="text-sm text-gray-500">Technical guidance directly from the owner.</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
            {/* Placeholder for About Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-gray-500 font-bold">
              [About Us / Shop Floor Photo]
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
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
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          {/* Left: Company Details */}
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-extrabold mt-2 mb-8">Ready to Upgrade?</h2>
            <p className="text-gray-400 text-lg mb-12">
              Fill out the form for an immediate technical proposal, or call us directly. We are available 9 AM - 9 PM.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-orange/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Head Office</h4>
                  <p className="text-gray-400 mt-1">
                    Pune, Maharashtra, India<br/>
                    (Visit by Appointment Only)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-orange/20 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Direct Sales Line</h4>
                  <p className="text-2xl font-bold text-white mt-1">+91 90288 60430</p>
                  <p className="text-brand-orange text-sm font-bold uppercase mt-1">Mr. Tushar Shinde (Owner)</p>
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

          {/* Right: The Form */}
          <div className="bg-white rounded-lg p-1">
             <LeadForm /> 
          </div>

        </div>
      </section>

      {/* FOOTER */}
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
