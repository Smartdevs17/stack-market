
import React from 'react';
import { Gavel } from 'lucide-react';

interface CreateAuctionButtonProps {
  onClick: () => void;
}

export const CreateAuctionButton: React.FC<CreateAuctionButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="btn-primary flex items-center gap-2 px-6 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all bg-gradient-to-r from-purple-600 to-indigo-600"
    >
      <Gavel size={20} />
      Start Dutch Auction
    </button>
  );
};
