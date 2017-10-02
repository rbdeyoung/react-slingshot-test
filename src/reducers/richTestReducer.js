import { SAVE_RICH_TEST, UPDATE_RICH_TEST_PROPS, ADD_NEW_ADDRESS_SUCCESS, GENERATE_BTC_ADDRESS_SUCCESS, SAGA_GENERATE_BTC_ACCOUNT_SUCCESS, SAGA_GENERATE_BTC_ADDRESS_SUCCESS } from '../actions/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function richTestReducer(state = initialState.richTest, action) {
  let newState;
  switch (action.type) {
    case SAVE_RICH_TEST:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, { dateModified: action.dateModified });
    case UPDATE_RICH_TEST_PROPS:
      newState = Object.assign({}, state);
      newState.dateModified = action.dateModified;
      newState[ action.fieldName ] = action.value;
      return newState;
    case SAGA_GENERATE_BTC_ACCOUNT_SUCCESS:
    case GENERATE_BTC_ADDRESS_SUCCESS:
      console.log('Saga generate BTC Account action reducing!', action);
      return Object.assign({}, state, { extendedPublicKey: action.extendedPublicKey, extendedPrivateKey: action.extendedPrivateKey, mnemonic: action.mnemonic, addresses: action.addresses });
    case ADD_NEW_ADDRESS_SUCCESS:
    case SAGA_GENERATE_BTC_ADDRESS_SUCCESS:
      return Object.assign({}, state, {addresses: [...state.addresses, action.address] });
    default:
      return state;
  }
}
