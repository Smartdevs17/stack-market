import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'pending' | 'success' | 'error' | 'paused' | 'flowing' | 'completed';
  label?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'flowing':
      case 'active':
      case 'success':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'pending':
      case 'paused':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'error':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'completed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyles()}`}>
      {label || status}
    </span>
  );
};
