/*
 *
 * Css7 reducer
 *
 */

import { fromJS } from 'immutable';

import {
  MOVE,
  RELOCATE,
  SET_NEW_NUMBER,
  RESET
} from './constants';

const initialState = fromJS({
  slide_data: {
    slide_1: {
      left: '-50%',
      value: 1
    },

    slide_2: {
      left: '0%',
      value: 1
    },

    slide_3: {
      left: '50%',
      value: 2
    }
  },

  move: false,
  reset_count: 0
});

function css7Reducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return state
                .set('reset_count', 1);

    case MOVE:
      let s1_Left = parseInt(state.getIn(['slide_data', 'slide_1', 'left'])) + 50 + '%',
          s2_Left = parseInt(state.getIn(['slide_data', 'slide_2', 'left'])) + 50 + '%',
          s3_Left = parseInt(state.getIn(['slide_data', 'slide_3', 'left'])) + 50 + '%';


      return state
                .set('move', true)
                .setIn(['slide_data', 'slide_1', 'left'], s1_Left)
                .setIn(['slide_data', 'slide_2', 'left'], s2_Left)
                .setIn(['slide_data', 'slide_3', 'left'], s3_Left);

    case RELOCATE:
       let left = relocateData(parseInt(state.getIn(['slide_data', 'slide_1', 'left'])),
                               parseInt(state.getIn(['slide_data', 'slide_2', 'left'])),
                               parseInt(state.getIn(['slide_data', 'slide_3', 'left'])),);

       return state
                .set('move', false)
                .setIn(['slide_data', 'slide_1', 'left'], left.s1)
                .setIn(['slide_data', 'slide_2', 'left'], left.s2)
                .setIn(['slide_data', 'slide_3', 'left'], left.s3);

    case SET_NEW_NUMBER:
        let value = getValue(state.get('reset_count'),
                             state.getIn(['slide_data', 'slide_1']).toJS(),
                             state.getIn(['slide_data', 'slide_2']).toJS(),
                             state.getIn(['slide_data', 'slide_3']).toJS());
        console.log(state.get('reset_count'));

        return state
                .set('reset_count', value.reset_count)
                .setIn(['slide_data', 'slide_1', 'value'], value.s1)
                .setIn(['slide_data', 'slide_2', 'value'],  value.s2)
                .setIn(['slide_data', 'slide_3', 'value'],  value.s3);
    default:
      return state;
  }
}

function relocateData(s1_Left, s2_Left, s3_Left){
  return {
    s1: (s1_Left === 100)? -50  +  '%' : s1_Left + '%',
    s2: (s2_Left === 100)? -50  + '%': s2_Left + '%',
    s3: (s3_Left === 100)? -50  +  '%': s3_Left + '%'
  }

}

function getValue(reset_count, s1, s2, s3) {

  return {
    s1: (s1.left === '-50%')? ((reset_count === 0)? s2.value + s3.value : 1) : s1.value,
    s2: (s2.left === '-50%')? ((reset_count === 0)? s1.value + s3.value : 1) : s2.value,
    s3: (s3.left === '-50%')? ((reset_count === 0)? s1.value + s2.value : 1) : s3.value,
    reset_count: (reset_count === 1)? 2 : 0
  }
}

function reset(data){
    let value = {
      '-50%' : 1,
      '0%'  : 1,
      '50%' : 2
    }

    return {
      slide_1 : {
        value: value[data.slide_1.left]
      },

      slide_2 : {
        value: value[data.slide_2.left]
      },

      slide_3 : {
        value: value[data.slide_3.left]
      }
    }
}

export default css7Reducer;
