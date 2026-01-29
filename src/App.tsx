
import { useState } from 'react';
import { GovernanceStats } from './components/lending/GovernanceStats';
import { ProposalList } from './components/lending/ProposalList';
import { CreateProposalButton } from './components/lending/CreateProposalButton';
import { CreateProposalModal } from './components/lending/CreateProposalModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProposal = (title: string, desc: string) => {
    console.log('Creating proposal:', title, desc);
    // Real logic would interact with smart contract
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">StackFarm Governance</h1>
          <p className="text-secondary">Vote on protocol parameters and upgrades</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-panel px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-medium">Mainnet Connected</span>
          </div>
        </div>
      </header>

      <GovernanceStats />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <ProposalList />
        </div>
        
        <div className="lg:col-span-1">
          <div className="glass-panel p-6 sticky top-8">
            <h3 className="text-lg font-bold mb-4">Actions</h3>
            <CreateProposalButton onClick={() => setIsModalOpen(true)} />
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-medium text-secondary mb-2">Your Voting Power</h4>
              <p className="text-3xl font-bold text-primary">1,250 <span className="text-sm text-secondary font-normal">vSTX</span></p>
            </div>
          </div>
        </div>
      </div>

      <CreateProposalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCreateProposal} 
      />
    </div>
  );
}

export default App;
