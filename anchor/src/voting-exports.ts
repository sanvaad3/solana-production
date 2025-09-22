import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import VotingIDL from '../target/idl/voting.json';
import type { Voting } from '../target/types/voting';

export { Voting, VotingIDL };

export const VOTING_PROGRAM_ID = new PublicKey(VotingIDL.address);

export function getVotingProgram(provider: AnchorProvider) {
  return new Program(VotingIDL as Voting, provider);
}

export function getVotingProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return VOTING_PROGRAM_ID;
  }
}
