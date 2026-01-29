
import React, { useState } from 'react';
import { Share2, X } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (recipient: string) => void;
  batchId: number | null;
}

export const TransferModal: React.FC<TransferModalProps> = ({ isOpen, onClose, onConfirm, batchId }) => {
  const [recipient, setRecipient] = useState('');

  if (!isOpen || batchId === null) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(recipient);
    onClose();
    setRecipient('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Share2 size={24} className="text-accent" /> Transfer Custody
        </h2>
        <p className="text-secondary text-sm mb-6">Transfer ownership of Batch #{batchId}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Recipient Address (Principal)</label>
            <input 
              type="text" 
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-primary focus:outline-none focus:border-accent transition-all font-mono text-sm"
              placeholder="ST1PQ..."
              required
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-secondary hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-primary"
            >
              Confirm Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
