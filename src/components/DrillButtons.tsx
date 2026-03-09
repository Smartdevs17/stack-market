import React, { useState } from 'react';
import { pingNetwork } from '../utils/contract-calls';
import { Activity, Radio } from 'lucide-react';
import { NETWORK_LABEL } from '../stacks-config';

export const DrillButtons: React.FC = () => {
    const [status, setStatus] = useState<string>('Ready');
    const [loading, setLoading] = useState<boolean>(false); // New state for loading
    const [result, setResult] = useState<string>(''); // New state for result message

    const handlePing = async () => { // Made handlePing async
        setLoading(true);
        setStatus('Broadcasting Ping...');
        setResult(''); // Clear previous result
        console.log(`[DrillButtons] Pinging network: ${NETWORK_LABEL}`);
        try {
            // Using a Promise-wrapped version of the callback-based pingNetwork
            const data: any = await new Promise((resolve, reject) => {
                pingNetwork('Hello Stacks!', (res) => resolve(res));
                setTimeout(() => reject(new Error('Timeout')), 10000);
            });
            console.log("[DrillButtons] Network response successful:", data);
            setStatus(`Ping Sent! TX: ${data.txId}`);
            setResult(`Success: Block Height ${data.tip_height || 'N/A'}`); // Assuming data might have tip_height
            setTimeout(() => setStatus('Ready'), 3000);
        } catch (error: any) {
            console.error("[DrillButtons] Network ping failed:", error);
            setStatus('Ping Failed!');
            setResult(`Error: ${error.message || 'Unknown error'}`);
            setTimeout(() => setStatus('Ready'), 3000);
        } finally {
            setLoading(false);
        }
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
                    disabled={loading}
                    className="btn-premium"
                 >
                    <Radio size={18} className={loading ? 'animate-pulse' : ''} /> 
                    {loading ? 'Pinging...' : 'Ping Network'}
                 </button>
            </div>
            
            {result && (
                <div className="absolute -bottom-6 right-0 text-[10px] font-mono text-accent animate-in fade-in slide-in-from-top-1">
                    {result}
                </div>
            )}
        </div>
    );
};
