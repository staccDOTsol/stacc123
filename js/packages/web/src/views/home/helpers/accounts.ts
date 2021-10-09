import {Keypair, PublicKey, SystemProgram,  Connection} from '@solana/web3.js';

import {
  CANDY_MACHINE,
  CANDY_MACHINE_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  TOKEN_METADATA_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from './constants';
import * as anchor from '@project-serum/anchor';
import fs from 'fs';
import BN from "bn.js";
import {createConfigAccount} from "./instructions";

export const createConfig = async function (
  anchorProgram: anchor.Program,
  payerWallet: anchor.web3.PublicKey,
  aw: Keypair,
  configData: {
    maxNumberOfLines: BN;
    symbol: string;
    sellerFeeBasisPoints: number;
    isMutable: boolean;
    maxSupply: BN;
    retainAuthority: boolean;
    creators: {
      address: PublicKey;
      verified: boolean;
      share: number;
    }[];
  },
) {
  const configAccount = Keypair.generate();
    const uuid = configAccount.publicKey.toBase58().slice(0, 6);

  return {
    config: configAccount.publicKey,
    uuid,
    txId: await anchorProgram.rpc.initializeConfig(
      {
        uuid,
        ...configData,
      },
      {
        accounts: {
          config: configAccount.publicKey,
          authority: aw.publicKey,
          payer: aw.publicKey,
          systemProgram: SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [configAccount, aw],
        instructions: [
          await createConfigAccount(
            anchorProgram,
            configData,
            aw.publicKey,
            configAccount.publicKey,
          ),
        ],
      },
    ),
  };
};

export const getTokenWallet = async function (
  wallet: PublicKey,
  mint: PublicKey,
) {
  return (
    await PublicKey.findProgramAddress(
      [wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    )
  )[0];
};

export const getCandyMachineAddress = async (
  config: anchor.web3.PublicKey,
  uuid: string,
) => {
  return await anchor.web3.PublicKey.findProgramAddress(
    [Buffer.from(CANDY_MACHINE), config.toBuffer(), Buffer.from(uuid)],
    CANDY_MACHINE_PROGRAM_ID,
  );
};

export const getConfig = async (
  authority: anchor.web3.PublicKey,
  uuid: string,
) => {
  return await anchor.web3.PublicKey.findProgramAddress(
    [Buffer.from(CANDY_MACHINE), authority.toBuffer(), Buffer.from(uuid)],
    CANDY_MACHINE_PROGRAM_ID,
  );
};

export const getMetadata = async (
  mint: anchor.web3.PublicKey,
): Promise<anchor.web3.PublicKey> => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID,
    )
  )[0];
};

export const getMasterEdition = async (
  mint: anchor.web3.PublicKey,
): Promise<anchor.web3.PublicKey> => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from('edition'),
      ],
      TOKEN_METADATA_PROGRAM_ID,
    )
  )[0];
};

export function loadWalletKey(keypair): Keypair {
  return Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(( "[145,  20, 164, 109, 141, 143,  10, 205,  27,  22, 242,  235, 212, 176, 137,   4, 204, 238, 225, 228,  80, 168,  183,  80, 150, 180, 103,  50, 125, 247, 145,  14, 210,   59, 125, 222, 191,  15,  27, 203,  34, 209, 209, 160,   23,  50,  99, 161, 170, 159, 200,  51,  58,  56, 139,  200,  34, 101,  34,  40, 235, 228,  23,  52]"
).toString())),
  );
}

 
export function loadWalletKey2(keypair): Keypair {
  return Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(( "[   72,  35,  47, 117, 252, 244,  12,  62, 242, 235, 231,  148, 195, 137, 250, 145, 187,  40, 124,  40, 100, 219,  101,   0,   1, 175,  40, 197,  95, 200, 213, 157, 210,   52, 125, 167,  42, 167, 123, 213, 197, 190, 254, 201,  71, 146,   9, 105, 241,  88, 122, 192,  88, 115, 212,  253, 137,  37,  91, 174, 152, 213, 222, 237]"
).toString())),
  );
}
export async function loadAnchorProgram(connection: Connection, walletKeyPair: Keypair, env: string) {
  const solConnection = connection;
  const walletWrapper = new anchor.Wallet(walletKeyPair);
  const provider = new anchor.Provider(solConnection, walletWrapper, {
    preflightCommitment: 'recent',
  });
  const idl = await anchor.Program.fetchIdl(CANDY_MACHINE_PROGRAM_ID, provider);

  return new anchor.Program(idl, CANDY_MACHINE_PROGRAM_ID, provider);
}
