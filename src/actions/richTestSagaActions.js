import * as types from './actionTypes';

const numberOfAddressesToPopulate = 3;

export function generateNewAccount() {
  console.log('sagaActions: generateNewAccount');
  return {
    type: types.SAGA_GENERATE_BTC_ACCOUNT_BEGIN,
    numberOfAddressesToPopulate
  };
}

export function generateNewAddress(mnemonic, addressIndex) {
  console.log('sagaActions: generateNewAddress');
  return {
    type: types.SAGA_GENERATE_BTC_ADDRESS_BEGIN,
    mnemonic,
    addressIndex
  };
}
