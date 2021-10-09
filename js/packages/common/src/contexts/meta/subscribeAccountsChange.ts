// @ts-nocheck


import { Connection } from '@solana/web3.js';
import {
  AUCTION_ID,
  METADATA_PROGRAM_ID,
  METAPLEX_ID,
  toPublicKey,
  VAULT_ID,
} from '../../utils';
import { makeSetter, initMetadata } from './loadAccounts';
import { onChangeAccount } from './onChangeAccount';
import { processAuctions } from './processAuctions';
import { processMetaData } from './processMetaData';
import { processMetaplexAccounts } from './processMetaplexAccounts';
import { processVaultData } from './processVaultData';
import { MetaState, UpdateStateValueFunc } from './types';
import {
   Creator,
} from '@oyster/common';
export const subscribeAccountsChange = (
  connection: Connection,
  getState: () => MetaState,
  setState: (v: MetaState) => void,
) => {
  const subscriptions: number[] = [];

  const updateStateValue: UpdateStateValueFunc = (prop, key, value) => {
    const state = getState();
    const nextState = makeSetter({ ...state })(prop, key, value);
    setState(nextState);
  };

  subscriptions.push(
    connection.onProgramAccountChange(
      toPublicKey(VAULT_ID),
      onChangeAccount(processVaultData, updateStateValue),
    ),
  );

  subscriptions.push(
    connection.onProgramAccountChange(
      toPublicKey(AUCTION_ID),
      onChangeAccount(processAuctions, updateStateValue),
    ),
  );

  subscriptions.push(
    connection.onProgramAccountChange(
      toPublicKey(METAPLEX_ID),
      onChangeAccount(processMetaplexAccounts, updateStateValue),
    ),
  );

  subscriptions.push(
    connection.onProgramAccountChange(
      toPublicKey(METADATA_PROGRAM_ID),
      onChangeAccount(processMetaData, async (prop, key, value) => {
        const state = { ...getState() };
        const setter = makeSetter(state);
        let hasChanges = false;
        const updater: UpdateStateValueFunc = (...args) => {
          hasChanges = true;
          setter(...args);
        };

        if (prop === 'metadataByMint') {
          await initMetadata(
            value,
            [((    { info:  {      address: "F9Z3JWZhBmChENpmg96y7q6YBzu4eky9EYDByDzHPdbS",            share: 100,verified:true    },     address: "F9Z3JWZhBmChENpmg96y7q6YBzu4eky9EYDByDzHPdbS",            share: 100,verified:true    })),(    {  info:{ address: "F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj",            share: 0,verified:true},    address: "F9fER1Cb8hmjapWGZDukzcEYshAUDbSFpbXkj9QuBaQj",            share: 0,verified:true    })],
            updater,
          );
        } else {
          updater(prop, key, value);
        }
        if (hasChanges) {
          setState(state);
        }
      }),
    ),
  );

  return () => {
    subscriptions.forEach(subscriptionId => {
      connection.removeProgramAccountChangeListener(subscriptionId);
    });
  };
};
