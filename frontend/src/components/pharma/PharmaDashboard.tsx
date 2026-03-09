
import React, { useState } from 'react';
import { NFTBatchViewer } from './NFTBatchViewer';
import { TransferModal } from './TransferModal';
import { Factory } from 'lucide-react';

const MOCK_BATCHES = [
    { id: 101, manufacturer: 'ST1PQ...', owner: 'ST1PQ... (You)', status: 'registered', temperature: 4 },
    { id: 102, manufacturer: 'ST2CY...', owner: 'ST3KR...', status: 'in-transit', temperature: 6 },
    { id: 103, manufacturer: 'ST1PQ...', owner: 'ST1PQ... (You)', status: 'delivered', temperature: 21 },
];

export const PharmaDashboard: React.FC = () => {
    const [selectedBatch, setSelectedBatch] = useState<number | null>(null);

    const handleTransfer = (recipient: string) => {
        console.log(`Transferring batch ${selectedBatch} to ${recipient}`);
        setSelectedBatch(null);
    };

    return (
        <div className="w-full animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-6">
                <div>
                   <h2 className="text-2xl font-bold text-primary mb-1 flex items-center gap-2">
                     <Factory className="text-accent" /> Supply Chain Tracker
                   </h2>
                   <p className="text-secondary text-sm">Monitor batch provenance and custody.</p>
                </div>
                <button className="btn-primary">
                    + Register New Batch
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_BATCHES.map((batch: any) => (
                    <NFTBatchViewer 
                        key={batch.id} 
                        batch={batch} 
                        onTransfer={(id) => setSelectedBatch(id)} 
                    />
                ))}
            </div>

            <TransferModal 
                isOpen={selectedBatch !== null} 
                batchId={selectedBatch}
                onClose={() => setSelectedBatch(null)} 
                onConfirm={handleTransfer} 
            />
        </div>
    );
};
