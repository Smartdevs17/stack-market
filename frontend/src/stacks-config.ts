import { STACKS_MAINNET } from '@stacks/network';

// Global Network Config
export const NETWORK = STACKS_MAINNET;
export const NETWORK_LABEL = 'Stacks Mainnet';

// Contract Addresses (Mainnet)
const CONTRACT_DEPLOYER = 'SP9AS5B36MKC0FVF4DE75A1EBPANXQ14AEH98BH0';

export const CONTRACTS = {
    TOKEN: {
        address: CONTRACT_DEPLOYER,
        name: 'token-v10',
    },
    MARKET: {
        address: CONTRACT_DEPLOYER,
        name: 'marketplace-v3',
    },
    LENDING: {
        address: CONTRACT_DEPLOYER,
        name: 'governance-v5',
    }
};

// Micro-Transaction Limits
export const MICRO_STX_AMOUNT = 1; // 1 micro-STX (0.000001 STX)
export const DEFAULT_FEE = 1000; // Standard low fee
