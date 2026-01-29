
import React from 'react';
import { PlusCircle } from 'lucide-react';

interface CreateProposalButtonProps {
  onClick: () => void;
}

export const CreateProposalButton: React.FC<CreateProposalButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="btn-primary flex items-center gap-2 px-6 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
    >
      <PlusCircle size={20} />
      Create Proposal
    </button>
  );
};
