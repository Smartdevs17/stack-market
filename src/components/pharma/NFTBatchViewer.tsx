
import React from 'react';
import { Pill, Box, User, ArrowRight } from 'lucide-react';

interface Batch {
  id: number;
  manufacturer: string;
  owner: string;
  status: 'registered' | 'in-transit' | 'delivered';
  temperature: number;
}

interface NFTBatchViewerProps {
  batch: Batch;
  onTransfer: (id: number) => void;
}

export const NFTBatchViewer: React.FC<NFTBatchViewerProps> = ({ batch, onTransfer }) => {
  return (
    <div className="glass-panel p-5 relative group hover:bg-white/5 transition-all">
      <div className="absolute top-4 right-4 p-2 bg-white/5 rounded-lg text-accent">
         <Pill size={20} />
      </div>
      
      <h4 className="text-xl font-bold text-primary mb-1">Batch #{batch.id}</h4>
      <p className="text-secondary text-xs font-mono mb-4 truncate w-3/4">{batch.owner}</p>
      
      <div className="space-y-3 mb-6">
         <div className="flex items-center gap-3 text-sm text-secondary">
            <Box size={16} /> Status: <span className="text-white capitalize">{batch.status}</span>
         </div>
         <div className="flex items-center gap-3 text-sm text-secondary">
            <User size={16} /> Manufacturer: <span className="text-white truncate w-24">0x...{batch.manufacturer.slice(-4)}</span>
         </div>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-white/10">
         <span className={`text-sm font-bold ${batch.temperature > 25 ? 'text-red-400' : 'text-green-400'}`}>
            {batch.temperature}°C
         </span>
         
         <button 
           onClick={() => onTransfer(batch.id)}
           className="text-sm flex items-center gap-1 text-accent hover:text-white transition-colors"
         >
           Transfer <ArrowRight size={14} />
         </button>
      </div>
    </div>
  );
};
