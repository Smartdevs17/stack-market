
import React from 'react';
import { ShoppingBag, Clock, TrendingDown } from 'lucide-react';

interface DutchAuctionCardProps {
  id: number;
  item: string;
  currentPrice: number;
  startPrice: number;
  reservePrice: number;
  timeLeft: string;
}

export const DutchAuctionCard: React.FC<DutchAuctionCardProps> = ({ 
  id, item, currentPrice, startPrice, timeLeft 
}) => {
  const discount = Math.round(((startPrice - currentPrice) / startPrice) * 100);

  return (
    <div className="glass-panel p-5 hover:border-accent/50 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-bl-lg">
        -{discount}% OFF
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
          <ShoppingBag size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary">#{id} {item}</h4>
          <span className="text-xs text-secondary">Dutch Auction</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
            <span className="text-secondary text-sm flex items-center gap-1">
                <TrendingDown size={14} /> Current Price
            </span>
            <span className="text-2xl font-bold text-white">{currentPrice} <span className="text-sm font-normal text-secondary">STX</span></span>
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
           <div className="h-full bg-accent" style={{ width: `${100 - discount}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-secondary">
             <span>Start: {startPrice} STX</span>
             <span className="flex items-center gap-1"><Clock size={12} /> {timeLeft}</span>
        </div>
      </div>

      <button className="w-full btn-primary py-2">
        Buy Now
      </button>
    </div>
  );
};
