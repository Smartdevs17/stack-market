
import React from 'react';
import { ShieldCheck, Calendar, Wallet } from 'lucide-react';

interface IdentityCardProps {
    address: string;
    nickname: string;
    bio: string;
    reputation: number;
    joinedDate: string;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({ address, nickname, bio, reputation, joinedDate }) => {
    return (
        <div className="glass-panel p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
                        <div className="w-full h-full rounded-full bg-black/50 overflow-hidden backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-white">
                            {nickname.substring(0, 2).toUpperCase()}
                        </div>
                    </div>
                    {reputation > 800 && (
                        <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-black p-1.5 rounded-full" title="Top Rated User">
                             <ShieldCheck size={16} />
                        </div>
                    )}
                </div>

                <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                        {nickname} 
                        <span className="text-secondary text-sm font-normal bg-white/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                             <Wallet size={12} /> {address.substring(0, 6)}...{address.substring(address.length - 4)}
                        </span>
                    </h2>
                    <p className="text-secondary max-w-lg mb-4">{bio}</p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-secondary">
                        <div className="flex items-center gap-1">
                           <Calendar size={14} /> Joined {joinedDate}
                        </div>
                        <div className="flex items-center gap-1">
                            DeFi Score: <span className="text-accent font-bold">{reputation}</span>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                     <button className="btn-primary px-6 py-2 text-sm">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};
