
import { fromJS } from 'immutable';
import css2Reducer from '../reducer';

describe('css2Reducer', () => {
  it('returns the initial state', () => {
    expect(css2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
