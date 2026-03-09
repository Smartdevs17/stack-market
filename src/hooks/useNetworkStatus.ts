import { useState, useEffect } from 'react';
import { testNetwork } from '../utils/contract-calls';

interface NetworkStatus {
  isConnected: boolean;
  blockHeight: number;
  lastChecked: Date;
  loading: boolean;
  error: string | null;
}

export function useNetworkStatus(refreshInterval = 30000) {
  const [status, setStatus] = useState<NetworkStatus>({
    isConnected: false,
    blockHeight: 0,
    lastChecked: new Date(),
    loading: true,
    error: null,
  });

  const checkStatus = async () => {
    try {
      const data = await testNetwork();
      setStatus({
        isConnected: true,
        blockHeight: data.tip_height,
        lastChecked: new Date(),
        loading: false,
        error: null,
      });
    } catch (err: any) {
      setStatus(prev => ({
        ...prev,
        isConnected: false,
        loading: false,
        error: err.message || 'Connection failed',
      }));
    }
  };

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { ...status, refresh: checkStatus };
}
