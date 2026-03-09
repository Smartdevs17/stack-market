
import React, { useState } from 'react';
import { X, PlayCircle } from 'lucide-react';

interface CreateStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (recipient: string, amount: number, duration: number) => void;
}

export const CreateStreamModal: React.FC<CreateStreamModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(144);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(recipient, amount, duration);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-lg p-8 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-secondary hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-gradient flex items-center gap-2">
            <PlayCircle className="text-accent" /> Start Payment Stream
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Recipient Address</label>
            <input 
              type="text" 
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all font-mono text-sm"
              placeholder="ST1PQ..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-secondary mb-2">Total Amount (STX)</label>
                <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
                required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary mb-2">Duration (Blocks)</label>
                <input 
                type="number" 
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
                required
                />
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-xl text-xs text-secondary space-y-1">
             <div className="flex justify-between">
                <span>Rate per block:</span>
                <span className="text-white font-mono">{(amount / duration).toFixed(4)} STX</span>
             </div>
             <div className="flex justify-between">
                <span>Est. Duration:</span>
                <span className="text-white font-mono">~{(duration * 10 / 60).toFixed(1)} minutes</span>
             </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-2">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-3 text-secondary hover:text-white transition-colors font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary"
            >
              Create Stream
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
