
import { fromJS } from 'immutable';
import css1Reducer from '../reducer';

describe('css1Reducer', () => {
  it('returns the initial state', () => {
    expect(css1Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
