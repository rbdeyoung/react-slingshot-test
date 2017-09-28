import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import richTest from './richTestReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  richTest,
  routing: routerReducer
});

export default rootReducer;
