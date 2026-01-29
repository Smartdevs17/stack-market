
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreateAuctionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: string, start: number, reserve: number, duration: number) => void;
}

export const CreateAuctionModal: React.FC<CreateAuctionModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [item, setItem] = useState('');
  const [startPrice, setStartPrice] = useState(1000);
  const [reservePrice, setReservePrice] = useState(500);
  const [duration, setDuration] = useState(144);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(item, startPrice, reservePrice, duration);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-xl p-8 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-secondary hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold mb-8 text-gradient">Create Dutch Auction</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Item Name / NFT ID</label>
            <input 
              type="text" 
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
              placeholder="e.g. Genesis Batch #104"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-secondary mb-2">Start Price (STX)</label>
                <input 
                type="number" 
                value={startPrice}
                onChange={(e) => setStartPrice(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
                required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-secondary mb-2">Reserve Price (STX)</label>
                <input 
                type="number" 
                value={reservePrice}
                onChange={(e) => setReservePrice(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
                required
                />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Duration (Blocks)</label>
            <input 
              type="number" 
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-primary focus:outline-none focus:border-accent transition-all"
              defaultValue={144}
              required
            />
            <p className="text-xs text-secondary mt-2">Approx. ${(duration * 10) / 60} minutes</p>
          </div>
          
          <div className="flex justify-end gap-4 mt-8">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-3 text-secondary hover:text-white transition-colors font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary px-8 py-3 text-lg"
            >
              Launch Auction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
