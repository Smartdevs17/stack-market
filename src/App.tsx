import { useState } from 'react';
import { AuctionList } from './components/market/AuctionList';
import { CreateAuctionButton } from './components/market/CreateAuctionButton';
import { CreateAuctionModal } from './components/market/CreateAuctionModal';
import { ShoppingBag, Sun, Moon } from 'lucide-react';
import { createAuction } from './utils/contract-calls'; 
import clsx from 'clsx';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [isAuctionModalOpen, setIsAuctionModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleCreateAuction = (item: string, start: number, _reserve: number, _duration: number) => {
    console.log('Triggering Wallet for Auction...');
    createAuction(item, start, (data) => {
        console.log("Auction TX Broadcast:", data);
        setIsAuctionModalOpen(false);
    });
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Stack Market Logo" className="w-12 h-12 rounded-2xl shadow-xl shadow-blue-500/10" />
          <div>
            <h1 className="text-4xl font-extrabold text-gradient">Stack Market</h1>
            <p className="text-secondary text-sm font-medium tracking-tight">Decentralized Asset & Auction Protocol</p>
          </div>
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

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button 
          className={clsx("flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap bg-accent text-white shadow-lg")}
        >
          <ShoppingBag size={20} /> Marketplace
        </button>
      </div>

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

      <CreateAuctionModal
        isOpen={isAuctionModalOpen}
        onClose={() => setIsAuctionModalOpen(false)}
        onSubmit={handleCreateAuction}
      />
    </div>
  );
}

export default App;
