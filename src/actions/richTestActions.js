import * as types from '../constants/actionTypes';
import btc from 'bitcoinjs-lib';
import bip39 from 'bip39';

import {getFormattedDateTime} from '../utils/dateHelper';
const numberOfAddressesToPopulate = 10;
// example of a thunk using the redux-thunk middleware

function deriveAddressFromPath(root, addressType, addressIndex){
  const path = `m/0'/${addressType}/${addressIndex}`;
  return {path, address: root.derivePath(path).getAddress()};
}

export function saveRichTest(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_RICH_TEST,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}

export function handleRichTestFormInputUpdate(richTestSettings, fieldName, value) {
    return {
      type: types.UPDATE_RICH_TEST_PROPS,
      dateModified: getFormattedDateTime(),
      richTestSettings,
      fieldName,
      value
    };
}

export function generateBtcAddress(){

  const mnemonic = bip39.generateMnemonic();
  const publicSeedRoot = btc.HDNode.fromSeedBuffer(bip39.mnemonicToSeed(mnemonic));
  const address = publicSeedRoot.getAddress();
  let addresses = [ ];
  for(let addressType = 0; addressType < 2; addressType++){

    for(let addressIndex = 0; addressIndex < numberOfAddressesToPopulate; addressIndex++){
      addresses.push(deriveAddressFromPath(publicSeedRoot, addressType, addressIndex));
    }
  }
  return {
    type: types.GENERATE_BTC_ADDRESS,
    address,
    addresses,
    mnemonic
  };
}

export function addNewAddress(addresses, address, index){
  return {
    type: types.ADD_NEW_ADDRESS,
    addresses: [ ...addresses, deriveAddressFromPath(btc.HDNode.fromBase58(address), 0, index) ]
  }
}
