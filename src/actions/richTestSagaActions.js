import * as types from './actionTypes';

const numberOfAddressesToPopulate = 3;

export function generateNewAccount() {
  return {
    type: types.SAGA_GENERATE_BTC_ACCOUNT_BEGIN,
    numberOfAddressesToPopulate
  };
}

export function generateNewAddress(xpub, addressIndex) {

  return {
    type: types.SAGA_GENERATE_BTC_ADDRESS_BEGIN,
    xpub,
    addressIndex
  };
}
