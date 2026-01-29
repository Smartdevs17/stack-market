
import React from 'react';
import { IdentityCard } from './IdentityCard';
import { Award, TrendingUp, Zap } from 'lucide-react';

export const ProfileDashboard: React.FC = () => {
    // Mock Data - In production, fetch from identity-provider-v1 and reputation-score-v1
    const userProfile = {
        address: 'ST1PQ24CH0EKEDT2R3S6A7D9D99N6B0X7FR05624W',
        nickname: 'SatoshiNakamoto',
        bio: 'Building the future of finance on Stacks. Bitcoin maximalist & Clarity enthusiast.',
        reputation: 940,
        joinedDate: 'Jan 2024'
    };

    return (
        <div className="w-full animate-in fade-in duration-300">
             <div className="mb-8">
                 <IdentityCard {...userProfile} />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-purple-500/20 rounded-full text-purple-400 mb-3">
                        <Award size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">Top 1%</h3>
                    <p className="text-secondary text-sm">Governance Rank</p>
                </div>

                <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-blue-500/20 rounded-full text-blue-400 mb-3">
                        <TrendingUp size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">142</h3>
                    <p className="text-secondary text-sm">Transactions</p>
                </div>

                 <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-yellow-500/20 rounded-full text-yellow-400 mb-3">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">Active</h3>
                    <p className="text-secondary text-sm">Validator Status</p>
                </div>
             </div>

             <div className="glass-panel p-6">
                 <h3 className="text-lg font-bold text-white mb-4">Reputation Breakdown</h3>
                 <div className="space-y-4">
                     <div>
                         <div className="flex justify-between text-sm mb-1">
                             <span className="text-secondary">Governance Voting</span>
                             <span className="text-white">450 pts</span>
                         </div>
                         <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                             <div className="h-full bg-purple-500 w-[70%]"></div>
                         </div>
                     </div>
                     <div>
                         <div className="flex justify-between text-sm mb-1">
                             <span className="text-secondary">Load Repayments</span>
                             <span className="text-white">320 pts</span>
                         </div>
                         <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                             <div className="h-full bg-green-500 w-[50%]"></div>
                         </div>
                     </div>
                     <div>
                         <div className="flex justify-between text-sm mb-1">
                             <span className="text-secondary">Marketplace Activity</span>
                             <span className="text-white">170 pts</span>
                         </div>
                         <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500 w-[30%]"></div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};
