
import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import clsx from 'clsx';

export interface Proposal {
  id: number;
  title: string;
  status: 'active' | 'passed' | 'rejected' | 'executed';
  votesFor: number;
  votesAgainst: number;
  timeLeft: string;
}

interface ProposalItemProps {
  proposal: Proposal;
  onVote: (id: number, support: boolean) => void;
}

export const ProposalItem: React.FC<ProposalItemProps> = ({ proposal, onVote }) => {
  return (
    <div className="glass-panel p-4 mb-3 flex items-center justify-between hover:bg-white/5 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className={clsx("text-xs px-2 py-0.5 rounded-full uppercase font-bold tracking-wider", {
            'bg-green-500/20 text-green-400': proposal.status === 'passed',
            'bg-blue-500/20 text-blue-400': proposal.status === 'active',
            'bg-red-500/20 text-red-400': proposal.status === 'rejected',
            'bg-purple-500/20 text-purple-400': proposal.status === 'executed',
          })}>
            {proposal.status}
          </span>
          <span className="text-secondary text-xs">{proposal.timeLeft}</span>
        </div>
        <h4 className="text-primary font-semibold text-lg">{proposal.title}</h4>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end mr-4">
           <span className="text-sm text-green-400 font-mono flex items-center gap-1">
             <ThumbsUp size={12} /> {proposal.votesFor}
           </span>
           <span className="text-sm text-red-400 font-mono flex items-center gap-1">
             <ThumbsDown size={12} /> {proposal.votesAgainst}
           </span>
        </div>
        
        {proposal.status === 'active' && (
          <button 
            onClick={() => onVote(proposal.id, true)}
            className="btn-primary py-1.5 px-3 text-sm"
          >
            Vote
          </button>
        )}
      </div>
    </div>
  );
};
