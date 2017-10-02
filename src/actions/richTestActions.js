import * as types from './actionTypes';
import btc from 'bitcoinjs-lib';
import bip39 from 'bip39';
import { getFormattedDateTime } from '../utils/dateHelper';
const numberOfAddressesToPopulate = 3;

// example of a thunk using the redux-thunk middleware
function deriveAddressFromPath(root, addressType, addressIndex){
  const path = `m/44'/0'/0'/${addressType}/${addressIndex}`;
  return root.derivePath(path).getAddress();
}

function deriveAddressFromPathAsync(root, addressType, addressIndex) {
  return new Promise((resolve) => {
    setTimeout( () => {
      const path = `m/44'/0'/0'/${addressType}/${addressIndex}`;
      resolve({ path, address: deriveAddressFromPath(root, addressType, addressIndex) });
    }, 1000);
  });
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

export function generateBtcAddress() {
  return function(dispatch){
    const mnemonic = bip39.generateMnemonic(256);
    const publicSeedRoot = btc.HDNode.fromSeedBuffer(bip39.mnemonicToSeed(mnemonic));
    const extendedPublicKey = publicSeedRoot.neutered().toBase58();
    const extendedPrivateKey = publicSeedRoot.toBase58();

    let addressPromises = [];

    for (let addressIndex = 0; addressIndex < numberOfAddressesToPopulate; addressIndex++) {
      addressPromises.push(deriveAddressFromPathAsync(publicSeedRoot, 0, addressIndex));
    }
    Promise.all(addressPromises).then( (addresses) => {
      dispatch(
        {
          type: types.GENERATE_BTC_ADDRESS_SUCCESS,
          extendedPublicKey,
          extendedPrivateKey,
          addresses,
          mnemonic
        }
      );
    });
  };
}

export function addNewAddress(mnemonic, index) {
  return (dispatch) => {
    deriveAddressFromPathAsync(btc.HDNode.fromSeedBuffer(bip39.mnemonicToSeed(mnemonic)), 0, index)
      .then(result => {
        dispatch( {type: types.ADD_NEW_ADDRESS_SUCCESS, address: result  } );
      });
  };
}

