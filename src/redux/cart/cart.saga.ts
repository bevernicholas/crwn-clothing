import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import { CartActionTypes } from './cart.types';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut(): Generator<any, any, any> {
  yield put(clearCart());
}

export function* onSignOutSuccess(): Generator<any, any, any> {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}