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
    yield take(SLIDE);

    yield put(move());

    yield delay(600);

    yield put(relocate());

    yield put(setNewNumber());

    let slide_data = yield select(makeSlideData());

    let maxNum = Math.max(slide_data.slide_1.value, slide_data.slide_2.value, slide_data.slide_3.value);

    if(maxNum > 100){
      yield put(reset());
      yield put(setNewNumber());
    }

  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
