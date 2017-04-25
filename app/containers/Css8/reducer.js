/*
 *
 * Css7 reducer
 *
 */

import { fromJS } from 'immutable';

import {
  MOVE,
  RELOCATE,
  SET_NEW_NUMBER
} from './constants';

import nextColor from './utils/next-color';

const initialState = fromJS({
  slide_data: {
    slide_1: {
      left: '-100%',
      value: {
        start : 'rgb(0,0,2)',
        end : 'rgb(0,0, 1)'
      }
    },

    slide_2: {
      left: '0%',
      value: {
        start : 'rgb(0,0,1)',
        end : 'rgb(0,0, 0)'
      }
    },

    slide_3: {
      left: '100%',
      value: {
        start : 'rgb(0,0,3)',
        end : 'rgb(0,0, 2)'
      }
    }
  },

  move: false
});

function css8Reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE:
      let s1_Left = parseInt(state.getIn(['slide_data', 'slide_1', 'left'])) + 100 + '%',
          s2_Left = parseInt(state.getIn(['slide_data', 'slide_2', 'left'])) + 100 + '%',
          s3_Left = parseInt(state.getIn(['slide_data', 'slide_3', 'left'])) + 100 + '%';

      return state
                .set('move', true)
                .setIn(['slide_data', 'slide_1', 'left'], s1_Left)
                .setIn(['slide_data', 'slide_2', 'left'], s2_Left)
                .setIn(['slide_data', 'slide_3', 'left'], s3_Left);

    case RELOCATE:
       let left = relocateData(parseInt(state.getIn(['slide_data', 'slide_1', 'left'])),
                               parseInt(state.getIn(['slide_data', 'slide_2', 'left'])),
                               parseInt(state.getIn(['slide_data', 'slide_3', 'left'])));

       return state
                .set('move', false)
                .setIn(['slide_data', 'slide_1', 'left'], left.s1)
                .setIn(['slide_data', 'slide_2', 'left'], left.s2)
                .setIn(['slide_data', 'slide_3', 'left'], left.s3);

    case SET_NEW_NUMBER:
        let value = getValue(state.getIn(['slide_data', 'slide_1']).toJS(),
                             state.getIn(['slide_data', 'slide_2']).toJS(),
                             state.getIn(['slide_data', 'slide_3']).toJS());

        return state
                .setIn(['slide_data', 'slide_1', 'value'], value.s1)
                .setIn(['slide_data', 'slide_2', 'value'],  value.s2)
                .setIn(['slide_data', 'slide_3', 'value'],  value.s3);
    default:
      return state;
  }
}

function relocateData(s1_Left, s2_Left, s3_Left){

  return {
    s1: (s1_Left === 200)? -100  +  '%' : s1_Left + '%',
    s2: (s2_Left === 200)? -100  + '%': s2_Left + '%',
    s3: (s3_Left === 200)? -100  +  '%': s3_Left + '%'
  }

}

function getValue(s1, s2, s3) {

  return {
    s1: (s1.left === '-100%')? nextColor(s2.value) : s1.value,
    s2: (s2.left === '-100%')? nextColor(s3.value) : s2.value,
    s3: (s3.left === '-100%')? nextColor(s1.value) : s3.value
  }
}


export default css8Reducer;
