import { Metadata } from '../../actions';
import { Store, WhitelistedCreator } from '../../models/metaplex';
import { ParsedAccount } from '../accounts/types';

export const isMetadataPartOfStore = (
  m: ParsedAccount<Metadata>,
  whitelistedCreatorsByCreator: Record<
    string,
    ParsedAccount<WhitelistedCreator>
  >,
  store?: ParsedAccount<Store> | null,
) => {
  return true;
};
