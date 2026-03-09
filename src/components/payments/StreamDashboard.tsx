/**
 * StreamDashboard provides a visual overview of active STX/BTC payment streams.
 * Users can track progress, status, and claim available funds.
 */
import React from 'react';
import { StatusBadge } from '../common/StatusBadge';

interface Stream {
    id: number;
    recipient: string;
    totalAmount: number;
    claimedAmount: number;
    rate: string;
    status: 'flowing' | 'paused' | 'completed';
}

const MOCK_STREAMS: Stream[] = [
    { id: 1001, recipient: 'vendor.btc', totalAmount: 50000, claimedAmount: 12500, rate: '0.1 STX/block', status: 'flowing' },
    { id: 1002, recipient: 'audit-firm.stx', totalAmount: 10000, claimedAmount: 9800, rate: '0.5 STX/block', status: 'completed' },
    { id: 1003, recipient: 'contractor.btc', totalAmount: 25000, claimedAmount: 0, rate: '0.2 STX/block', status: 'paused' },
];

export const StreamDashboard: React.FC = () => {
    return (
        <div className="w-full animate-in fade-in duration-300">
             <div className="flex items-center justify-between mb-8">
                <div>
                   <h2 className="text-2xl font-bold text-primary mb-1 flex items-center gap-2">
                     <RefreshCw className="text-accent animate-spin-slow" /> Payment Streams
                   </h2>
                   <p className="text-secondary text-sm">Real-time vesting and continuous payments.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <PlayCircle size={18} /> Create New Stream
                </button>
            </div>

            <div className="space-y-4">
                {MOCK_STREAMS.map(stream => (
                     <div key={stream.id} className="glass-panel p-6 flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <StatusBadge status={stream.status} />
                                <h4 className="text-lg font-bold text-primary">Stream #{stream.id}</h4>
                            </div>
                            <p className="text-secondary text-sm font-mono">{stream.recipient} • {stream.rate}</p>
                        </div>

                        <div className="flex-1 px-8">
                            <div className="flex justify-between text-xs text-secondary mb-1">
                                <span>{stream.claimedAmount} claimed</span>
                                <span>{stream.totalAmount} total</span>
                            </div>
                            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-accent transition-all duration-1000" 
                                    style={{ width: `${(stream.claimedAmount / stream.totalAmount) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                             {stream.status === 'flowing' && (
                                 <button className="p-2 hover:bg-white/5 rounded-lg text-yellow-400 transition-colors">
                                     <StopCircle size={20} />
                                 </button>
                             )}
                             <button className="btn-primary py-1.5 px-4 text-sm flex items-center gap-1">
                                 <BadgeDollarSign size={16} /> Claim
                             </button>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    );
};
