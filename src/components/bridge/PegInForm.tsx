
import React, { useState } from 'react';
import { QrCode, Copy, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

export const PegInForm: React.FC = () => {
  const [step, setStep] = useState<'input' | 'deposit' | 'confirming'>('input');
  const [amount, setAmount] = useState<number>(0.1);
  const [btcAddress, setBtcAddress] = useState<string>('');

  const handleGenerateAddress = (e: React.FormEvent) => {
      e.preventDefault();
      setStep('deposit');
      // Mock generating a unique deposit address
      setBtcAddress(`3${Math.random().toString(36).substring(2, 10)}...${Math.random().toString(36).substring(2, 10)}`);
      
      // Auto-simulate confirmation after 5 seconds
      setTimeout(() => setStep('confirming'), 5000);
  };

  return (
    <div className="glass-panel p-6 h-full relative overflow-hidden">
        <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
            BTC <ArrowRight size={16} className="text-secondary" /> sBTC
        </h3>
        
        {step === 'input' && (
            <form onSubmit={handleGenerateAddress} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                   <label className="block text-sm font-medium text-secondary mb-2">Amount to Bridge (BTC)</label>
                   <div className="relative">
                       <input 
                           type="number" 
                           step="0.0001"
                           value={amount}
                           onChange={(e) => setAmount(Number(e.target.value))}
                           className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary text-xl font-mono focus:outline-none focus:border-accent transition-all"
                           required 
                       />
                       <span className="absolute right-4 top-4 text-orange-500 font-bold">BTC</span>
                   </div>
                   <p className="text-xs text-secondary mt-2">You will receive approx. {amount} sBTC</p>
                </div>
                <button type="submit" className="w-full btn-primary py-3 text-lg">
                    Generate Deposit Address
                </button>
            </form>
        )}

        {step === 'deposit' && (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="bg-white p-4 rounded-xl inline-block mx-auto">
                    <QrCode size={120} className="text-black" />
                </div>
                <div>
                    <p className="text-sm text-secondary mb-2">Send precisely {amount} BTC to:</p>
                    <div className="bg-black/40 p-3 rounded-lg flex items-center justify-between gap-2 font-mono text-sm text-while border border-white/10">
                        <span className="truncate">{btcAddress}</span>
                        <button className="text-accent hover:text-white"><Copy size={16} /></button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-warning animate-pulse">
                     <Loader2 size={16} className="animate-spin" /> Waiting for confirmations (0/3)...
                </div>
            </div>
        )}

        {step === 'confirming' && (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="inline-flex p-4 bg-green-500/20 rounded-full text-green-400 mb-4">
                    <CheckCircle size={48} />
                </div>
                <h4 className="text-2xl font-bold text-white">Deposit Detected!</h4>
                <p className="text-secondary">Your sBTC are being minted on Stacks.</p>
                <button 
                  onClick={() => setStep('input')}
                  className="mt-6 text-accent hover:text-white underline text-sm"
                >
                    Bridge More
                </button>
            </div>
        )}
    </div>
  );
};
