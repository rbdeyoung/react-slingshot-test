import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
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
    console.info('handleRichTestFormInputUpdate action creator', richTestSettings, fieldName, value);
    return {
      type: types.UPDATE_RICH_TEST_PROPS,
      dateModified: getFormattedDateTime(),
      richTestSettings,
      fieldName,
      value
    };
};
