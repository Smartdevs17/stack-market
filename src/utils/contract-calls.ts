
import { openContractCall } from '@stacks/connect';
import { 
    PostConditionMode, 
    uintCV, 
    stringAsciiCV
} from '@stacks/transactions';
import { CONTRACTS, MICRO_STX_AMOUNT, NETWORK } from '../stacks-config';

// Generic Wrapper
interface CallProps {
    contractAddress: string;
    contractName: string;
    functionName: string;
    functionArgs: any[];
    onFinish: (data: any) => void;
}

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
export async function testNetwork(): Promise<any> {
    const response = await fetch(`${(NETWORK as any).coreApiUrl}/v2/info`);
    return response.json();
}

// --- Specific Action Wrappers ---

export const pingNetwork = async (message: string, onFinish: (data: any) => void) => {
    await callContract({
        contractAddress: CONTRACTS.UTILS.GEN.address,
        contractName: CONTRACTS.UTILS.GEN.name,
        functionName: 'ping',
        functionArgs: [stringAsciiCV(message)],
        onFinish
    });
};

export const submitProposal = async (title: string, desc: string, onFinish: (data: any) => void) => {
     // Mocking args since real contract expects more specific types
     // In a real app, we'd verify the exact ABI of lending-pool-v3
    await callContract({
        contractAddress: CONTRACTS.LENDING.address,
        contractName: CONTRACTS.LENDING.name,
        functionName: 'submit-proposal',
        functionArgs: [stringAsciiCV(title), stringAsciiCV(desc), uintCV(MICRO_STX_AMOUNT)],
        onFinish
    });
};

export const createAuction = async (_item: string, startPrice: number, onFinish: (data: any) => void) => {
    await callContract({
        contractAddress: CONTRACTS.MARKET.address,
        contractName: CONTRACTS.MARKET.name,
        functionName: 'create-auction',
        functionArgs: [uintCV(1), uintCV(startPrice), uintCV(100), uintCV(144), uintCV(10)], // Hardcoded safe defaults
        onFinish
    });
};

export const updateProfile = async (nickname: string, bio: string, onFinish: (data: any) => void) => {
    await callContract({
        contractAddress: CONTRACTS.DID.REGISTRY.address,
        contractName: CONTRACTS.DID.REGISTRY.name,
        functionName: 'update-profile',
        functionArgs: [stringAsciiCV(nickname), stringAsciiCV(bio), stringAsciiCV("https://avatar.url")],
        onFinish
    });
};
