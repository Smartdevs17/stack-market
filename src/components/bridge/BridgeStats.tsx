
import React from 'react';
import { Lock, Radio, Activity } from 'lucide-react';

export const BridgeStats: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-panel p-5 flex items-center justify-between border-l-4 border-orange-500">
                <div>
                    <p className="text-secondary text-sm font-medium">Total BTC Locked</p>
                    <h3 className="text-primary text-2xl font-bold mt-1 text-white">142.5 <span className="text-sm font-normal text-orange-400">BTC</span></h3>
                </div>
                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                    <Lock size={24} />
                </div>
            </div>

            <div className="glass-panel p-5 flex items-center justify-between border-l-4 border-green-500">
                <div>
                    <p className="text-secondary text-sm font-medium">Relayer Network</p>
                    <h3 className="text-primary text-2xl font-bold mt-1 text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Online
                    </h3>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                     <Radio size={24} />
                </div>
            </div>

            <div className="glass-panel p-5 flex items-center justify-between border-l-4 border-blue-500">
                <div>
                    <p className="text-secondary text-sm font-medium">Bridge Volume (24h)</p>
                    <h3 className="text-primary text-2xl font-bold mt-1 text-white">$4.2M</h3>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                     <Activity size={24} />
                </div>
            </div>
        </div>
    );
};
