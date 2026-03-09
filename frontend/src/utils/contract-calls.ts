
import { openContractCall } from '@stacks/connect';
import { 
    PostConditionMode, 
    uintCV
} from '@stacks/transactions';
import { CONTRACTS, NETWORK } from '../stacks-config';

// Generic Wrapper
interface CallProps {
    contractAddress: string;
    contractName: string;
    functionName: string;
    functionArgs: any[];
    onFinish: (data: any) => void;
}

/**
 * Generic wrapper for executing a Stacks contract call via @stacks/connect.
 * @param props - Object containing contract and function details.
 */
export const callContract = async ({ contractAddress, contractName, functionName, functionArgs, onFinish }: CallProps) => {
    const options = {
        contractAddress,
        contractName,
        functionName,
        functionArgs,
        network: NETWORK,
        postConditionMode: PostConditionMode.Allow, // For dev speed; in prod use Deny
        onFinish,
    };
    await openContractCall(options);
};

// Test network connection and get tip height
/**
 * Pings the Stacks node to verify network connectivity and retrieve the current tip height.
 * @returns A promise resolving to the network info JSON.
 */
export async function testNetwork(): Promise<any> {
    const response = await fetch(`${(NETWORK as any).coreApiUrl}/v2/info`);
    return response.json();
}

// --- Specific Action Wrappers ---

export const createAuction = async (_item: string, startPrice: number, onFinish: (data: any) => void) => {
    await callContract({
        contractAddress: CONTRACTS.MARKET.address,
        contractName: CONTRACTS.MARKET.name,
        functionName: 'create-auction',
        functionArgs: [uintCV(1), uintCV(startPrice), uintCV(100), uintCV(144), uintCV(10)], // Hardcoded safe defaults
        onFinish
    });
};
