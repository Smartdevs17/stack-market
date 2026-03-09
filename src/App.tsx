
import { useState } from 'react';
import { GovernanceStats } from './components/lending/GovernanceStats';
import { ProposalList } from './components/lending/ProposalList';
import { CreateProposalButton } from './components/lending/CreateProposalButton';
import { CreateProposalModal } from './components/lending/CreateProposalModal';
import { AuctionList } from './components/market/AuctionList';
import { CreateAuctionButton } from './components/market/CreateAuctionButton';
import { CreateAuctionModal } from './components/market/CreateAuctionModal';
import { PharmaDashboard } from './components/pharma/PharmaDashboard';
import { StreamDashboard } from './components/payments/StreamDashboard';
import { CreateStreamModal } from './components/payments/CreateStreamModal';
import { BridgeDashboard } from './components/bridge/BridgeDashboard';
import { ProfileDashboard } from './components/did/ProfileDashboard';
import { DrillButtons } from './components/DrillButtons';
import { LayoutDashboard, ShoppingBag, Truck, BadgeDollarSign, Repeat, User, Sun, Moon } from 'lucide-react';
import { submitProposal, createAuction } from './utils/contract-calls'; 
import clsx from 'clsx';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'lending' | 'market' | 'pharma' | 'payments' | 'bridge' | 'profile'>('lending');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isAuctionModalOpen, setIsAuctionModalOpen] = useState(false);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleCreateProposal = (title: string, desc: string) => {
    console.log('Triggering Wallet for Proposal...');
    submitProposal(title, desc, (data) => {
        console.log("Proposal TX Broadcast:", data);
        setIsProposalModalOpen(false);
    });
  };

  const handleCreateAuction = (item: string, start: number, _reserve: number, _duration: number) => {
    console.log('Triggering Wallet for Auction...');
    createAuction(item, start, (data) => {
        console.log("Auction TX Broadcast:", data);
        setIsAuctionModalOpen(false);
    });
  };

  const handleCreateStream = (recipient: string, amount: number, duration: number) => {
    // Wiring pending for payments, keep mock for now or implement wrapper
    console.log('Creating stream:', recipient, amount, duration);
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">StackFarm Protocol</h1>
          <p className="text-secondary text-lg">Integrated DeFi & Supply Chain Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="glass-panel p-2.5 text-secondary hover:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="glass-panel px-4 py-2 flex items-center gap-2 border-green-500/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
            <span className="text-sm font-medium text-green-100">Mainnet • Block #84,231</span>
          </div>
        </div>
      </header>

      <DrillButtons />

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('lending')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-accent text-white shadow-lg": activeTab === 'lending',
            "glass-panel text-secondary hover:text-white": activeTab !== 'lending'
          })}
        >
          <LayoutDashboard size={20} /> Governance
        </button>
        <button 
          onClick={() => setActiveTab('market')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-accent text-white shadow-lg": activeTab === 'market',
            "glass-panel text-secondary hover:text-white": activeTab !== 'market'
          })}
        >
          <ShoppingBag size={20} /> Marketplace
        </button>
        <button 
          onClick={() => setActiveTab('pharma')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-accent text-white shadow-lg": activeTab === 'pharma',
            "glass-panel text-secondary hover:text-white": activeTab !== 'pharma'
          })}
        >
          <Truck size={20} /> Supply Chain
        </button>
        <button 
          onClick={() => setActiveTab('payments')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-accent text-white shadow-lg": activeTab === 'payments',
            "glass-panel text-secondary hover:text-white": activeTab !== 'payments'
          })}
        >
          <BadgeDollarSign size={20} /> Payments
        </button>
        <button 
          onClick={() => setActiveTab('bridge')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-orange-600 text-white shadow-lg": activeTab === 'bridge',
            "glass-panel text-secondary hover:text-white": activeTab !== 'bridge'
          })}
        >
          <Repeat size={20} /> Bridge
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap", {
            "bg-purple-600 text-white shadow-lg": activeTab === 'profile',
            "glass-panel text-secondary hover:text-white": activeTab !== 'profile'
          })}
        >
          <User size={20} /> Identity
        </button>
      </div>

      {activeTab === 'lending' && (
        <div className="animate-in fade-in duration-300">
            <GovernanceStats />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                <ProposalList />
                </div>
                <div className="lg:col-span-1">
                <div className="glass-panel p-6 sticky top-8">
                    <h3 className="text-lg font-bold mb-4 text-primary">Quick Actions</h3>
                    <CreateProposalButton onClick={() => setIsProposalModalOpen(true)} />
                    <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-sm font-medium text-secondary mb-4">Quick Resources</h4>
                      <div className="flex flex-col gap-2">
                        <a href="https://explorer.hiro.so" target="_blank" className="text-xs text-accent hover:underline flex items-center gap-1">
                          Hiro Explorer <LayoutDashboard size={10} />
                        </a>
                        <a href="https://docs.stacks.co" target="_blank" className="text-xs text-accent hover:underline flex items-center gap-1">
                          Stacks Documentation <LayoutDashboard size={10} />
                        </a>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )}
      
      {activeTab === 'market' && (
        <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-end mb-6">
                <div>
                   <h2 className="text-2xl font-bold text-primary mb-1">Dutch Auctions</h2>
                   <p className="text-secondary text-sm">Prices drop every block until sold.</p>
                </div>
                <CreateAuctionButton onClick={() => setIsAuctionModalOpen(true)} />
            </div>
            <AuctionList />
        </div>
      )}

      {activeTab === 'pharma' && (
         <PharmaDashboard />
      )}

      {activeTab === 'payments' && (
         <div className="animate-in fade-in duration-300">
            <div className="flex justify-end mb-4">
                <button 
                    onClick={() => setIsStreamModalOpen(true)}
                    className="hidden" 
                ></button>
            </div>
            <StreamDashboard />
         </div>
      )}

      {activeTab === 'bridge' && (
         <BridgeDashboard />
      )}

      {activeTab === 'profile' && (
         <ProfileDashboard />
      )}

      <CreateProposalModal 
        isOpen={isProposalModalOpen} 
        onClose={() => setIsProposalModalOpen(false)} 
        onSubmit={handleCreateProposal} 
      />

      <CreateAuctionModal
        isOpen={isAuctionModalOpen}
        onClose={() => setIsAuctionModalOpen(false)}
        onSubmit={handleCreateAuction}
      />

      <CreateStreamModal 
        isOpen={isStreamModalOpen}
        onClose={() => setIsStreamModalOpen(false)}
        onSubmit={handleCreateStream} 
      />
    </div>
  );
}

export default App;
