
import { fromJS } from 'immutable';
import css4Reducer from '../reducer';

describe('css4Reducer', () => {
  it('returns the initial state', () => {
    expect(css4Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
