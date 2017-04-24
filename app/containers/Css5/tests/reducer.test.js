
import { fromJS } from 'immutable';
import css5Reducer from '../reducer';

describe('css5Reducer', () => {
  it('returns the initial state', () => {
    expect(css5Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
