
import { StacksTestnet } from '@stacks/network';

// Global Network Config
export const network = new StacksTestnet();

// Contract Addresses (Mocked / Testnet)
// In a real scenario, these would come from environment variables or a registry
const CONTRACT_DEPLOYER = 'ST1PQ24CH0EKEDT2R3S6A7D9D99N6B0X7FR05624W';

export const CONTRACTS = {
    LENDING: {
        address: CONTRACT_DEPLOYER,
        name: 'lending-pool-v3',
    },
    MARKET: {
        address: CONTRACT_DEPLOYER,
        name: 'marketplace-v3',
    },
    PHARMA: {
        address: CONTRACT_DEPLOYER,
        name: 'drug-tracking-v3',
    },
    PAYMENTS: {
        address: CONTRACT_DEPLOYER,
        name: 'payment-escrow-v3',
    },
    BRIDGE: {
        IN: { address: CONTRACT_DEPLOYER, name: 'btc-peg-in-v1' },
        OUT: { address: CONTRACT_DEPLOYER, name: 'btc-peg-out-v1' },
    },
    DID: {
        REGISTRY: { address: CONTRACT_DEPLOYER, name: 'identity-provider-v1' },
        SCORING: { address: CONTRACT_DEPLOYER, name: 'reputation-score-v1' },
    },
    UTILS: {
        GEN: { address: CONTRACT_DEPLOYER, name: 'transaction-gen-v1' },
    }
};

// Micro-Transaction Limits
export const MICRO_STX_AMOUNT = 1; // 1 micro-STX (0.000001 STX)
export const DEFAULT_FEE = 1000; // Standard low fee
