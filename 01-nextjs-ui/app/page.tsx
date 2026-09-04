'use client';

import React, { useState } from 'react';

export default function B2BPitchGenerator() {
  const [clientNeeds, setClientNeeds] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [proposal, setProposal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!clientNeeds) return;
    setIsGenerating(true);
    
    // Simulating backend API delay
    setTimeout(() => {
      setProposal(`[Simulated B2B Proposal]\n\nBased on your client's needs, here is the structured executive summary, scope of work, and investment breakdown... (Connect backend to view full AI generation)`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-300">
        
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10 text-center">
          <h1 className="text-4xl font-extrabold mb-3">AI B2B Pitch & Proposal Generator 💼</h1>
          <p className="text-blue-200 text-lg">Close deals faster. Instantly draft winning proposals, scope of work, and pitch decks.</p>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Client Requirements / Problem Statement *</label>
              <textarea 
                rows={5}
                className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                placeholder="e.g., Client needs a scalable e-commerce platform with AI recommendation engine..."
                value={clientNeeds}
                onChange={(e) => setClientNeeds(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Budget</label>
                <input 
                  type="text" 
                  className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="e.g., $10,000 - $15,000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Timeline Expectations</label>
                <input 
                  type="text" 
                  className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="e.g., 3 Months"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !clientNeeds}
              className={`w-full py-4 text-white font-bold rounded-lg transition-all ${isGenerating ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'}`}
            >
              {isGenerating ? 'Drafting Corporate Proposal...' : 'Generate Winning Proposal 🚀'}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 shadow-inner">
            {proposal ? (
              <div className="h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span>📄</span> Professional Draft
                </h3>
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium bg-white p-6 rounded-lg border border-slate-300 h-[calc(100%-3rem)] overflow-y-auto shadow-sm">
                  {proposal}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <span className="text-7xl mb-4 opacity-30">🏢</span>
                <p className="text-center text-lg">Enter your client's needs to generate a ready-to-send project proposal.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
