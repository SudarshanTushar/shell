import { useState } from 'react';

export default function LeadForm({ productContext = "General" }) {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, productType: productContext })
    });

    if (res.ok) setStatus('success');
    else setStatus('error');
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-50 border border-green-200 text-center rounded">
        <h4 className="text-xl font-bold text-green-800">Enquiry Received</h4>
        <p className="text-green-700 mt-2">Our engineering team will call you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg border-t-4 border-brand-orange">
      <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Request Technical Specs</h3>
      
      <div className="space-y-4">
        <input 
          required type="text" placeholder="Full Name" 
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-brand-orange outline-none transition"
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <input 
          required type="text" placeholder="Company Name" 
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-brand-orange outline-none transition"
          onChange={e => setFormData({...formData, company: e.target.value})}
        />
        <input 
          required type="tel" placeholder="Mobile Number" 
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-brand-orange outline-none transition"
          onChange={e => setFormData({...formData, phone: e.target.value})}
        />
        <button 
          disabled={status === 'loading'}
          className="w-full py-4 bg-brand-orange text-white font-bold uppercase hover:bg-orange-700 transition"
        >
          {status === 'loading' ? 'Processing...' : 'Get Best Price'}
        </button>
      </div>
    </form>
  );
}
