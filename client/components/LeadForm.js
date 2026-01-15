import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', message: '', productType: 'General'
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
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

  // Common styles for all inputs to ensure visibility
  const inputStyles = "w-full p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-xl border-t-4 border-brand-orange">
      <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Request Technical Proposal</h3>
      <div className="space-y-4">
        
        {/* Name Input */}
        <input 
          required 
          type="text"
          className={inputStyles} 
          placeholder="Full Name" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})} 
        />
        
        {/* Company Input */}
        <input 
          required 
          type="text"
          className={inputStyles} 
          placeholder="Company Name" 
          value={formData.company}
          onChange={e => setFormData({...formData, company: e.target.value})} 
        />
        
        <div className="grid grid-cols-2 gap-4">
          {/* Email Input */}
          <input 
            required 
            type="email" 
            className={inputStyles} 
            placeholder="Email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})} 
          />
          {/* Phone Input */}
          <input 
            required 
            type="tel" 
            className={inputStyles} 
            placeholder="Phone" 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})} 
          />
        </div>

        {/* Product Select */}
        <select 
          className={inputStyles}
          value={formData.productType}
          onChange={e => setFormData({...formData, productType: e.target.value})}
        >
          <option value="General">Select Requirement</option>
          <option value="Screw Compressor">Screw Compressor (15kW+)</option>
          <option value="Reciprocating">Reciprocating Compressor</option>
          <option value="Air Dryer">Air Dryer / Line Filter</option>
        </select>

        {/* Message Textarea */}
        <textarea 
          className={`${inputStyles} h-24`} 
          placeholder="Specific Requirements (Flow rate, Pressure...)" 
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
        
        <button 
          disabled={status === 'submitting'} 
          type="submit" 
          className="w-full bg-ind-blue text-white font-bold py-4 uppercase hover:bg-slate-800 transition"
        >
          {status === 'submitting' ? 'Processing...' : 'Submit Enquiry'}
        </button>
      </div>
    </form>
  );
}
