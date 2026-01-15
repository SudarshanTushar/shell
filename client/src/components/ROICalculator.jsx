import { useState } from 'react';

export default function ROICalculator() {
  const [bill, setBill] = useState('');
  const [savings, setSavings] = useState(0);

  const calculate = () => {
    // Assumption: VFD Compressors save ~30% compared to standard load/unload
    const monthlySaving = parseFloat(bill) * 0.30; 
    setSavings(monthlySaving);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="p-10 md:w-1/2">
          <h3 className="text-2xl font-bold text-ind-blue mb-2">Calculate Your ROI</h3>
          <p className="text-gray-600 mb-6">Enter your monthly compressor electricity bill.</p>
          
          <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Electricity Bill (₹)</label>
          <input 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-ind-accent focus:outline-none"
            placeholder="e.g. 500000"
            onChange={(e) => setBill(e.target.value)}
          />
          <button 
            onClick={calculate}
            className="mt-6 w-full bg-ind-blue text-white py-3 font-bold uppercase tracking-wider hover:bg-slate-800 transition"
          >
            Calculate Savings
          </button>
        </div>
        
        <div className="p-10 md:w-1/2 bg-ind-blue text-white flex flex-col justify-center items-center text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest">Potential Monthly Savings</p>
          <div className="text-5xl font-extrabold text-green-400 my-4">
            ₹{savings.toLocaleString('en-IN')}
          </div>
          <p className="text-sm text-gray-400">With our VFD Technology</p>
          <p className="mt-8 text-xs text-gray-500">*Estimates based on typical load profiles.</p>
        </div>
      </div>
    </section>
  );
}
