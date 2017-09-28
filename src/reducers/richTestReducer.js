import {SAVE_RICH_TEST, UPDATE_RICH_TEST_PROPS} from '../constants/actionTypes';
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
      return objectAssign({}, state, {dateModified: action.dateModified});
    case UPDATE_RICH_TEST_PROPS:
      console.info('UPDATE_RICH_TEST_PROPS', action);
      newState = Object.assign({}, state);
      newState.dateModified = action.dateModified;
      console.info('action.value', action.value);
      newState[action.fieldName] = action.value;
      console.info('UPDATE_RICH_TEST_PROPS', newState);
      return newState;
    default:
      return state;
  }
}
