
import React, { useState } from 'react';
import { pingNetwork } from '../../utils/contract-calls';
import { Activity, Radio } from 'lucide-react';

export const DrillButtons: React.FC = () => {
    const [status, setStatus] = useState<string>('Ready');

    const handlePing = () => {
        setStatus('Broadcasting Ping...');
        pingNetwork('Hello Stacks!', (data) => {
            console.log('Ping Success:', data);
            setStatus(`Ping Sent! TX: ${data.txId}`);
            setTimeout(() => setStatus('Ready'), 3000);
        });
    };

    return (
        <div className="glass-panel p-4 mb-8 flex items-center justify-between border-blue-500/20">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Activity size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Network Diagnostics</h3>
                    <p className="text-sm text-secondary">Generate micro-transactions to keep the chain active.</p>
                </div>
            </div>

            <div className="flex items-center gap-4 text-right">
                 <p className="text-xs text-secondary font-mono mr-2">{status}</p>
                 <button 
                    onClick={handlePing}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium text-sm"
                 >
                    <Radio size={16} /> Ping Network
                 </button>
            </div>
        </div>
    );
};
