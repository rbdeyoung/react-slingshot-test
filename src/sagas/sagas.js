import * as btcApi from '../api/btcApi';
import * as types from '../actions/actionTypes';
import { take, call, put } from 'redux-saga/effects';

/* eslint-disable */
export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* generateBtcAccount() {
  while(true) {
    //Listen for the account creation action
    yield take(types.SAGA_GENERATE_BTC_ACCOUNT_BEGIN);
    console.log("I'm responding to a generate account request!");
    //First, get the state
    // let state = getState(); let's not get the state right now

    //Next, generate a new account asynchronously
    console.log("I'm going to yield call the btcApi to generate a new address");
    let account = yield call(btcApi.generateBtcAccount);
    console.log("Finished yield calling. Here's the object returned: ", account);

    //Signal success for the account creation
    console.log("I'm going to yield put dispatch a successful account generation action to the store");
    yield put({type: types.SAGA_GENERATE_BTC_ACCOUNT_SUCCESS, ...account});
    console.log("I've finished yield putting");
    //Next, generate 3 new addresses for that account
    for(let i = 0; i<3; i++){
      let address = yield call(btcApi.getAddressAt, btcApi.getRootFromMnemonic(account.mnemonic),0,i);
      yield put({type: types.SAGA_GENERATE_BTC_ADDRESS_SUCCESS, address})
    }

    //Signal success for address creation
  }
}

export function* generateNewAddressWithCall() {
  while(true){
    const action = yield take(types.SAGA_GENERATE_BTC_ADDRESS_BEGIN);
    const address = yield call(btcApi.getAddressAt, btcApi.getRootFromMnemonic(action.mnemonic),0,action.addressIndex);
    yield put({type: types.SAGA_GENERATE_BTC_ADDRESS_SUCCESS, address})
  }
}

export function* generateNewAddressWithFork() {

}

