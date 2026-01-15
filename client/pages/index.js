import Head from 'next/head';
import Navbar from '../components/Navbar';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Head>
        <title>Industrial Compressors India | Heavy Duty Air Systems</title>
        <meta name="description" content="Premium industrial air compressors for manufacturing, pharma, and automotive sectors." />
      </Head>

      <Navbar />

      {/* HERO SECTION */}
      <header className="relative bg-ind-blue text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-brand-orange border border-brand-orange/50 uppercase">
              ISO 9001:2015 Certified
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Powering Indian <br/>
              <span className="text-brand-orange">Manufacturing</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              High-efficiency screw and reciprocating compressors designed for 24/7 industrial loads. Service support across 20+ states.
            </p>
            <div className="flex gap-4 text-sm font-bold text-gray-300">
              <span>✓ 5-Year Warranty</span>
              <span>✓ 24hr On-site Support</span>
            </div>
          </div>
          
          <div id="contact" className="relative z-10">
            <LeadForm />
          </div>
        </div>
      </header>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ind-blue uppercase tracking-tight">Our Product Range</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Screw Compressors", desc: "For continuous duty. 15kW to 250kW range.", price: "From ₹2.5L" },
            { title: "Reciprocating", desc: "High pressure solutions for specialized needs.", price: "From ₹45,000" },
            { title: "Air Dryers", desc: "Refrigerated and Desiccant dryers for zero moisture.", price: "From ₹35,000" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 p-8 hover:shadow-xl transition duration-300 group">
              <div className="h-40 bg-gray-100 mb-6 flex items-center justify-center text-gray-400 font-bold">
                [Product Image]
              </div>
              <h3 className="text-xl font-bold text-ind-blue mb-2 group-hover:text-brand-orange">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <div className="font-bold text-gray-900">{item.price}</div>
              <button className="mt-6 text-brand-orange font-bold text-sm uppercase tracking-wide border-b-2 border-transparent hover:border-brand-orange">
                View Specs &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-ind-blue text-white py-12 text-center text-sm text-gray-500">
        <p>© 2026 Industrial Systems Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
