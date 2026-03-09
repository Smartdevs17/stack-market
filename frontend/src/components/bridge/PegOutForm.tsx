
import React, { useState } from 'react';
import { ArrowRight, Flame, CheckCircle, ExternalLink } from 'lucide-react';

export const PegOutForm: React.FC = () => {
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input');
  const [amount, setAmount] = useState<number>(0.1);
  const [btcAddress, setBtcAddress] = useState<string>('');

  const handleWithdraw = (e: React.FormEvent) => {
      e.preventDefault();
      setStep('processing');
      // Simulate burning and relayer delay
      setTimeout(() => setStep('success'), 4000);
  };

  return (
    <div className="glass-panel p-6 h-full relative overflow-hidden">
        <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
            sBTC <ArrowRight size={16} className="text-secondary" /> BTC
        </h3>
        
        {step === 'input' && (
            <form onSubmit={handleWithdraw} className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                <div>
                   <label className="block text-sm font-medium text-secondary mb-2">Withdraw Amount (sBTC)</label>
                   <div className="relative">
                       <input 
                           type="number" 
                           step="0.0001"
                           value={amount}
                           onChange={(e) => setAmount(Number(e.target.value))}
                           className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary text-xl font-mono focus:outline-none focus:border-accent transition-all"
                           required 
                       />
                       <span className="absolute right-4 top-4 text-accent font-bold">sBTC</span>
                   </div>
                   <p className="text-xs text-secondary mt-2">Available Balance: 4.25 sBTC</p>
                </div>

                <div>
                   <label className="block text-sm font-medium text-secondary mb-2">Destination BTC Address</label>
                   <input 
                       type="text" 
                       value={btcAddress}
                       onChange={(e) => setBtcAddress(e.target.value)}
                       className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary font-mono text-sm focus:outline-none focus:border-accent transition-all pl-10"
                       placeholder="bc1q..."
                       required 
                   />
                </div>

                <button type="submit" className="w-full btn-primary py-3 text-lg bg-gradient-to-r from-orange-600 to-red-600 border-none">
                    Unwrap & Withdraw
                </button>
            </form>
        )}

        {step === 'processing' && (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-300">
                 <div className="relative inline-block">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <Flame size={64} className="text-orange-500 relative z-10 animate-bounce" />
                 </div>
                 <h4 className="text-2xl font-bold text-white">Burning sBTC...</h4>
                 <p className="text-secondary">Broadcasting burn proof to Relayer network.</p>
            </div>
        )}

        {step === 'success' && (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="inline-flex p-4 bg-green-500/20 rounded-full text-green-400 mb-4">
                    <CheckCircle size={48} />
                </div>
                <h4 className="text-2xl font-bold text-white">Withdrawal Initiated!</h4>
                <p className="text-secondary max-w-xs mx-auto">Your BTC will arrive in your wallet shortly.</p>
                
                <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-white text-sm mt-4">
                    View on Mempool <ExternalLink size={14} />
                </a>
                
                <button 
                  onClick={() => setStep('input')}
                  className="block w-full mt-8 text-secondary hover:text-white text-sm"
                >
                    Start New Withdrawal
                </button>
            </div>
        )}
    </div>
  );
};
