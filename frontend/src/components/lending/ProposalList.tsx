
import React, { useState } from 'react';
import { ProposalItem } from './ProposalItem';
import type { Proposal } from './ProposalItem';

// Mock Data
const MOCK_PROPOSALS: Proposal[] = [
    { id: 1, title: 'Genesis: Initialize Protocol Parameters', status: 'passed', votesFor: 10000, votesAgainst: 0, timeLeft: 'Ended' },
    { id: 2, title: 'Update Interest Rate Model to Linear', status: 'active', votesFor: 5400, votesAgainst: 1200, timeLeft: '1 day left' },
    { id: 3, title: 'Add WBTC as Collateral Type', status: 'rejected', votesFor: 100, votesAgainst: 8000, timeLeft: 'Ended' },
    { id: 4, title: 'Emergency Pause: Market Volatility', status: 'executed', votesFor: 9000, votesAgainst: 100, timeLeft: 'Executed' },
];

export const ProposalList: React.FC = () => {
    const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);

    const handleVote = (id: number, support: boolean) => {
        console.log(`Voted ${support ? 'for' : 'against'} proposal ${id}`);
        // Optimistic update
        setProposals(prev => prev.map(p => {
            if (p.id !== id) return p;
            return {
                ...p,
                votesFor: support ? p.votesFor + 100 : p.votesFor,
                votesAgainst: !support ? p.votesAgainst + 100 : p.votesAgainst
            };
        }));
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold mb-4 text-primary">Governance Proposals</h3>
            <div className="flex flex-col gap-2">
                {proposals.map(p => (
                    <ProposalItem key={p.id} proposal={p} onVote={handleVote} />
                ))}
            </div>
        </div>
    );
};
