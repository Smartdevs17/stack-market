
import React from 'react';
import { BridgeStats } from './BridgeStats';
import { PegInForm } from './PegInForm';
import { PegOutForm } from './PegOutForm';
import { Bitcoin } from 'lucide-react';

export const BridgeDashboard: React.FC = () => {
    return (
        <div className="w-full animate-in fade-in duration-300">
             <div className="flex items-center justify-between mb-8">
                <div>
                   <h2 className="text-2xl font-bold text-primary mb-1 flex items-center gap-2">
                     <span className="p-2 bg-orange-500 rounded-lg text-white"><Bitcoin size={24} /></span> 
                     BTC &larr;&rarr; Stacks Bridge
                   </h2>
                   <p className="text-secondary text-sm">Trustless Bitcoin Peg-In and Peg-Out via sBTC.</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-secondary border border-white/5">Testnet Mode</span>
                </div>
            </div>

            <BridgeStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Peg In */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-center text-secondary">Deposit BTC</h3>
                    <PegInForm />
                </div>

                {/* Right Column: Peg Out */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-center text-secondary">Withdraw BTC</h3>
                    <PegOutForm />
                </div>
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center text-sm text-blue-300">
                <p>⚠️ This is a Testnet Bridge. Do not send real Bitcoin.</p>
            </div>
        </div>
    );
};
