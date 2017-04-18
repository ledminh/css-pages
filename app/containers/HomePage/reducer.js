/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_LINKS,
} from './constants';

const initialState = fromJS({
  links: []
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LINKS:
      return state
                .mergeDeep({links: action.links});
    default:
      return state;
  }
}

export default homePageReducer;
