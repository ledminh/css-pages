
import { fromJS } from 'immutable';
import css7Reducer from '../reducer';

describe('css7Reducer', () => {
  it('returns the initial state', () => {
    expect(css7Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
