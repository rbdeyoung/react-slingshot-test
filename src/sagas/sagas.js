import * as btcApi from '../api/btcApi';
import * as types from '../actions/actionTypes';
import { take, call, put } from 'redux-saga/effects';

/* eslint-disable */
export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* generateBtcAccount() {
  while(true) {
    yield take(types.SAGA_GENERATE_BTC_ACCOUNT_BEGIN);

    let account = yield call(btcApi.generateBtcAccount);

    yield put({type: types.SAGA_GENERATE_BTC_ACCOUNT_SUCCESS, ...account});

    for(let i = 0; i<3; i++){
      let address = yield call(btcApi.getAddressAt, account.xpub, i, false);
      yield put({type: types.SAGA_GENERATE_BTC_ADDRESS_SUCCESS, address})
    }
  }
}

export function* generateNewAddressWithCall() {
  while(true){
    const action = yield take(types.SAGA_GENERATE_BTC_ADDRESS_BEGIN);
    const address = yield call(btcApi.getAddressAt, action.xpub, action.addressIndex);
    yield put({type: types.SAGA_GENERATE_BTC_ADDRESS_SUCCESS, address})
  }
}

