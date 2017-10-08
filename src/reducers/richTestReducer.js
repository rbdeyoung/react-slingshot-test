import { SAVE_RICH_TEST, UPDATE_RICH_TEST_PROPS, ADD_NEW_ADDRESS_SUCCESS, GENERATE_BTC_ADDRESS_SUCCESS, SAGA_GENERATE_BTC_ACCOUNT_SUCCESS, SAGA_GENERATE_BTC_ADDRESS_SUCCESS } from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

function getAddressesDescriptor(isChange){
  return isChange ? 'internalAddresses' : 'externalAddresses';
}

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function richTestReducer(state = initialState.richTest, action) {
  let newState;
  switch (action.type) {
    case SAVE_RICH_TEST:
      return objectAssign({}, state, { dateModified: action.dateModified });
    case UPDATE_RICH_TEST_PROPS:
      newState = Object.assign({}, state);
      newState.dateModified = action.dateModified;
      newState[ action.fieldName ] = action.value;
      return newState;
    case SAGA_GENERATE_BTC_ACCOUNT_SUCCESS:
    case GENERATE_BTC_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        xpub: action.xpub,
        mnemonic: action.mnemonic,
        externalAddresses: action.externalAddresses,
        internalAddresses: action.internalAddresses });
    case ADD_NEW_ADDRESS_SUCCESS:
    case SAGA_GENERATE_BTC_ADDRESS_SUCCESS:
      return Object.assign({}, state, { [getAddressesDescriptor(action.isChange)]: [...state[getAddressesDescriptor(action.isChange)], action.address] });
    default:
      return state;
  }
}


