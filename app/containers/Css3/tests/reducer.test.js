
import { fromJS } from 'immutable';
import css3Reducer from '../reducer';

describe('css3Reducer', () => {
  it('returns the initial state', () => {
    expect(css3Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
