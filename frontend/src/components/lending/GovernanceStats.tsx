/**
 * GovernanceStats component displays high-level metrics for the DAO
 * including active proposals, total votes, and membership count.
 */
import React from 'react';
import { Vote, Users, Activity } from 'lucide-react';

interface StatProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({ label, value, icon }) => (
  <div className="glass-panel p-6 flex items-center justify-between hover:scale-[1.02] active:scale-[0.98]">
    <div>
      <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
      <h3 className="text-primary text-3xl font-extrabold text-gradient">{value}</h3>
    </div>
    <div className="p-4 bg-blue-500/10 rounded-2xl text-accent shadow-inner">
      {icon}
    </div>
  </div>
);

export const GovernanceStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <StatCard 
        label="Active Proposals" 
        value="12" 
        icon={<Activity size={24} />} 
      />
      <StatCard 
        label="Total Votes Cast" 
        value="45.2K" 
        icon={<Vote size={24} />} 
      />
      <StatCard 
        label="DAO Members" 
        value="1,204" 
        icon={<Users size={24} />} 
      />
    </div>
  );
};
