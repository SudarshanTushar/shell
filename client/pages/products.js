import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

// Centralized Product Data
const PRODUCTS = [
  { 
    id: "cp-10-ts",
    model: "CP 10 TS",
    title: "10HP Belt Driven Compressor", 
    image: "/assets/products/cp10.jpg",
    desc: "Heavy-duty Shell industrial unit. Ideal for high-demand manufacturing setups.",
    specs: [{ label: "Motor", val: "10 HP (415V)" }, { label: "Tank", val: "500 Liters" }, { label: "Flow", val: "35 CFM" }, { label: "Pressure", val: "175 PSI" }],
    price: "₹98,000"
  },
  { 
    id: "cp-07-ts",
    model: "CP 07 TS",
    title: "7.5HP Industrial Piston", 
    image: "/assets/products/cp07.jpg",
    desc: "Optimized for medium industrial loads with high reliability.",
    specs: [{ label: "Motor", val: "7.5 HP (415V)" }, { label: "Tank", val: "300 Liters" }, { label: "Flow", val: "24.8 CFM" }, { label: "Pressure", val: "175 PSI" }],
    price: "₹75,000"
  },
  { 
    id: "cp-05-ts",
    model: "CP 05 TS",
    title: "5HP Workshop Compressor", 
    image: "/assets/products/cp05.jpg",
    desc: "Compact powerhouse for garages, small workshops, and pneumatic tools.",
    specs: [{ label: "Motor", val: "5 HP (415V)" }, { label: "Tank", val: "250 Liters" }, { label: "Flow", val: "17.7 CFM" }, { label: "Pressure", val: "175 PSI" }],
    price: "₹60,000"
  },
];

export default function Products() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Head><title>Inventory | Shell Compressor</title></Head>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-ind-blue">Industrial Inventory</h1>
          <p className="text-gray-500 mt-4">Ready Stock available in Pune. 100% Copper Wound.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col group">
              <div className="h-64 bg-white border-b border-gray-100 relative p-4">
                 <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-ind-blue mb-2">{item.title}</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-6 bg-slate-50 p-3 rounded">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between col-span-2 border-b border-slate-200 last:border-0 py-1">
                      <span className="font-bold">{spec.label}:</span><span>{spec.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs text-gray-400 font-bold block">Best Price</span>
                    <span className="text-2xl font-extrabold text-brand-orange">{item.price}</span>
                  </div>
                  <Link href="/contact" className="bg-ind-blue text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-slate-800">Order Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
