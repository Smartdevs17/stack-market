
import React from 'react';
import { DutchAuctionCard } from './DutchAuctionCard';

const MOCK_AUCTIONS = [
    { id: 1, item: 'Genesis Batch #001', currentPrice: 850, startPrice: 1000, reservePrice: 500, timeLeft: '4h 23m' },
    { id: 2, item: 'Rare Serum Vial', currentPrice: 120, startPrice: 200, reservePrice: 50, timeLeft: '1h 10m' },
    { id: 3, item: 'Medical Drone Lic.', currentPrice: 4500, startPrice: 5000, reservePrice: 4000, timeLeft: '12h 00m' },
    { id: 4, item: 'Vaccine Crates (10x)', currentPrice: 300, startPrice: 1000, reservePrice: 100, timeLeft: '20m' },
];

export const AuctionList: React.FC = () => {
    return (
        <div className="w-full">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                Live Dutch Auctions <span className="text-xs font-normal text-secondary px-2 py-1 bg-white/5 rounded-full">4 Active</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {MOCK_AUCTIONS.map(a => (
                    <DutchAuctionCard key={a.id} {...a} />
                ))}
            </div>
        </div>
    );
};
