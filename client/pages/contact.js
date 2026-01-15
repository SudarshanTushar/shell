import Head from 'next/head';
import Navbar from '../components/Navbar';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Head><title>Contact Sales | Shell Compressor</title></Head>
      <Navbar />

      <div className="bg-ind-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold">Contact Sales</h1>
          <p className="text-gray-400 mt-2">Get a technical proposal within 2 hours.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-5">
          
          {/* Contact Info */}
          <div className="md:col-span-2 bg-slate-900 p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-orange mb-6">Direct Line</h3>
              <p className="text-sm text-gray-400 mb-1">Sales Director</p>
              <p className="text-xl font-bold mb-6">+91 90288 60430</p>
              
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="text-lg font-bold mb-6">sales@shellcompressor.in</p>

              <p className="text-sm text-gray-400 mb-1">Office</p>
              <p className="text-sm leading-relaxed">
                Pune, Maharashtra<br/>India
              </p>
            </div>
            <div className="mt-8 text-xs text-gray-500">
              Hours: Mon-Sat, 9AM - 8PM
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
             <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
