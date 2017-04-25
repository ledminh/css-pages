
import { fromJS } from 'immutable';
import css6Reducer from '../reducer';

describe('css6Reducer', () => {
  it('returns the initial state', () => {
    expect(css6Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
