import { take, call, put, select } from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {
  SLIDE
} from './constants';

import {slide, move, relocate, setNewNumber, reset} from './actions';

import {makeSlideData} from './selectors';

// Individual exports for testing
export function* defaultSaga() {
  while(true){
    yield delay(30);

    yield put(move());

    yield delay(70);

    yield put(relocate());

    yield put(setNewNumber());

    let slide_data = yield select(makeSlideData());


  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
