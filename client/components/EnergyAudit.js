import { useState } from 'react';

export default function EnergyAudit() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ industry: '', city: '', bill: '', phone: '' });
  const [wasteProfile, setWasteProfile] = useState(null);
  const [error, setError] = useState(''); // New Error State

  // FEATURE 2: INDUSTRY WASTE PROFILES
  const WASTE_STATS = {
    'Textile': { loss: 0.28, text: 'Textile plants typically waste 28% air energy due to loom leaks.' },
    'Pharma': { loss: 0.15, text: 'Pharma units lose 15% efficiency in moisture control systems.' },
    'Auto': { loss: 0.22, text: 'Pneumatic tools in Auto hubs drive up costs by 22% via pressure drops.' },
    'General': { loss: 0.20, text: 'Standard industrial setups waste 20% on heat generation.' }
  };

  const handleIndustrySelect = (ind) => {
    setData({ ...data, industry: ind });
    setWasteProfile(WASTE_STATS[ind] || WASTE_STATS['General']);
  };

  const calculateBleed = () => {
    // Validation: Require Bill Amount
    if (!data.bill) {
      setError('⚠ Please enter your monthly electricity bill amount.');
      return;
    }
    setError('');
    setStep(2);
  };

  const submitLead = (e) => {
    e.preventDefault();
    if (!data.phone) {
       alert("Please enter a mobile number.");
       return;
    }
    alert("Report Request Sent! We will call you at " + data.phone);
    // Backend Integration would go here
  };

  // FEATURE 1: CALCULATIONS
  const loss = data.bill ? Math.round(data.bill * (wasteProfile?.loss || 0.2)) : 0;
  const savings = Math.round(loss * 0.8); 

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      
      {/* HEADER */}
      <div className="bg-ind-blue p-6 text-white text-center">
        <h3 className="text-2xl font-extrabold uppercase tracking-wider">
          {step === 1 ? "🛑 Stop Energy Bleed" : "⚡ Audit Report Ready"}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          {step === 1 ? "Calculate your factory's hidden losses." : "Here is how much you are losing."}
        </p>
      </div>

      <div className="p-8">
        
        {/* STEP 1: INPUTS */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Industry Type</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                value={data.industry}
                onChange={(e) => handleIndustrySelect(e.target.value)}
              >
                <option value="">Select Industry</option>
                <option value="Textile">Textile / Spinning</option>
                <option value="Pharma">Pharmaceuticals</option>
                <option value="Auto">Automotive / Ancillary</option>
                <option value="General">General Manufacturing</option>
              </select>
            </div>

            {/* DYNAMIC WASTE PROFILE */}
            {wasteProfile && (
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-brand-orange text-sm text-orange-900 font-medium animate-pulse">
                 ⚠️ ALERT: {data.city ? `Factories in ${data.city} show similar trends.` : ''} {wasteProfile.text}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                <input 
                  type="text" 
                  placeholder="e.g. Pune" 
                  className="w-full p-3 border border-gray-300 rounded focus:border-brand-orange outline-none"
                  value={data.city}
                  onChange={(e) => setData({...data, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Bill (₹)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 500000" 
                  className={`w-full p-3 border rounded focus:border-brand-orange outline-none ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  value={data.bill}
                  onChange={(e) => setData({...data, bill: e.target.value})}
                />
              </div>
            </div>
            
            {/* ERROR MESSAGE */}
            {error && (
              <div className="text-red-600 text-sm font-bold text-center">
                {error}
              </div>
            )}

            {/* FEATURE 3: BILL DECODER */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer group">
              <svg className="w-8 h-8 mx-auto text-gray-400 group-hover:text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span className="block mt-2 text-sm font-bold text-gray-600">Upload Bill PDF (Optional)</span>
              <span className="text-xs text-gray-400">AI will detect peak load penalties.</span>
              <input type="file" className="hidden" />
            </div>

            <button 
              onClick={calculateBleed}
              className="w-full bg-brand-orange text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-orange-700 transition shadow-lg"
            >
              Analyze My Loss
            </button>
          </div>
        )}

        {/* STEP 2: RESULTS & CAPTURE */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* FEATURE 1: BLEED STATS */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-red-50 rounded border border-red-100">
                <span className="block text-xs text-red-600 font-bold uppercase">Monthly Waste</span>
                <span className="block text-2xl font-extrabold text-red-700">₹{loss.toLocaleString()}</span>
              </div>
              <div className="p-4 bg-green-50 rounded border border-green-100">
                <span className="block text-xs text-green-600 font-bold uppercase">Potential Savings</span>
                <span className="block text-2xl font-extrabold text-green-700">₹{savings.toLocaleString()}</span>
              </div>
            </div>

            {/* FEATURE 5: SMART QUOTE */}
            <div className="bg-slate-50 p-4 rounded text-left border border-slate-200">
              <h4 className="font-bold text-ind-blue mb-2 text-sm uppercase">Recommended Setup:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Compressor:</strong> {loss > 50000 ? 'Shell Screw 30kW (VFD)' : 'Shell Piston 10HP'}</li>
                <li>• <strong>Dryer:</strong> {data.industry === 'Pharma' ? 'Desiccant (Zero Dew Point)' : 'Refrigerated'}</li>
                <li>• <strong>Piping:</strong> Aluminum Smart Pipe</li>
              </ul>
            </div>

            {/* FEATURE 6: PSYCHOLOGICAL LEAD CAPTURE */}
            <div className="border-t pt-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Where should we send the full report?</label>
              <input 
                type="tel" 
                placeholder="Enter Mobile Number" 
                className="w-full p-3 border border-gray-300 rounded mb-4 focus:border-brand-orange outline-none"
                value={data.phone}
                onChange={(e) => setData({...data, phone: e.target.value})}
              />
              <button 
                onClick={submitLead}
                className="w-full bg-ind-blue text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Send Optimization Report</span>
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </button>
              <button 
                onClick={() => setStep(1)}
                className="w-full text-center text-gray-400 text-xs mt-4 hover:text-gray-600 underline"
              >
                Start Over
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
