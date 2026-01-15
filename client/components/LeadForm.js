import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', message: '', productType: 'General'
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // In production, use absolute URL if on different subdomain, or relative if served from same origin
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) setStatus('success');
    else setStatus('error');
  };

  if (status === 'success') return (
    <div className="bg-green-100 p-6 rounded text-center text-green-800 font-bold border border-green-300">
      Request Received. ID: #{Math.floor(Math.random() * 1000)}<br/>
      Our engineer will call you within 2 hours.
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-xl border-t-4 border-brand-orange">
      <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Request Technical Proposal</h3>
      <div className="space-y-4">
        <input required className="w-full p-3 border border-gray-300 rounded" placeholder="Full Name" 
          onChange={e => setFormData({...formData, name: e.target.value})} />
        
        <input required className="w-full p-3 border border-gray-300 rounded" placeholder="Company Name" 
          onChange={e => setFormData({...formData, company: e.target.value})} />
        
        <div className="grid grid-cols-2 gap-4">
          <input required type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Email" 
            onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="tel" className="w-full p-3 border border-gray-300 rounded" placeholder="Phone" 
            onChange={e => setFormData({...formData, phone: e.target.value})} />
        </div>

        <select className="w-full p-3 border border-gray-300 rounded bg-white"
            onChange={e => setFormData({...formData, productType: e.target.value})}>
          <option value="General">Select Requirement</option>
          <option value="Screw Compressor">Screw Compressor (15kW+)</option>
          <option value="Reciprocating">Reciprocating Compressor</option>
          <option value="Air Dryer">Air Dryer / Line Filter</option>
        </select>

        <textarea className="w-full p-3 border border-gray-300 rounded h-24" placeholder="Specific Requirements (Flow rate, Pressure...)" 
            onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
        
        <button disabled={status === 'submitting'} type="submit" className="w-full bg-ind-blue text-white font-bold py-4 uppercase hover:bg-slate-800 transition">
          {status === 'submitting' ? 'Processing...' : 'Submit Enquiry'}
        </button>
      </div>
    </form>
  );
}
