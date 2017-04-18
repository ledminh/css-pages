import { take, call, put, select } from 'redux-saga/effects';

import {
  REQUEST_LINKS
} from './constants';

import {links} from 'data';

import {loadLinks} from './actions';

// Individual exports for testing
export function* defaultSaga() {
  while(true){
    yield take(REQUEST_LINKS);

    yield put(loadLinks(links));
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
