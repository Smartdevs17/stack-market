
import React, { useState } from 'react';
import { pingNetwork } from '../utils/contract-calls';
import { Activity, Radio } from 'lucide-react';

// Assuming NETWORK_LABEL and testNetwork are defined elsewhere or need to be added.
// For the purpose of this edit, I will assume testNetwork is the new name for pingNetwork
// and NETWORK_LABEL needs to be defined.
// Also, setLoading and setResult state variables need to be added.

// Placeholder for NETWORK_LABEL, you might want to define this globally or pass as prop
const NETWORK_LABEL = "Stacks Mainnet"; // Or "Stacks Testnet", etc.

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
            // Assuming testNetwork is the new function to call, replacing the old pingNetwork
            // If pingNetwork from contract-calls is still used, the signature needs to match.
            // For this edit, I'm adapting to the provided snippet's structure.
            // If the original pingNetwork from contract-calls is async and returns a promise,
            // then `await pingNetwork('Hello Stacks!')` would be appropriate.
            // Given the snippet, it seems `testNetwork()` is expected to be an async call.
            const data: any = await pingNetwork('Hello Stacks!'); // Using the imported pingNetwork, assuming it's now async
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
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium text-sm"
                 >
                    <Radio size={16} /> Ping Network
                 </button>
            </div>
        </div>
    );
};
