import { createSelector } from 'reselect';

/**
 * Direct selector to the css7 state domain
 */
const selectCss8Domain = () => (state) => state.get('css8');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css7
 */

const makeSelectCss8 = () => createSelector(
  selectCss8Domain(),
  (substate) => substate.toJS()
);


const makeSlideData = () => createSelector(
  selectCss8Domain(),
  (substate) => substate.get('slide_data').toJS()
);

const makeMove = () => createSelector(
  selectCss8Domain(),
  (substate) => substate.get('move')
);

export default makeSelectCss8;

export {
  selectCss8Domain,
  makeSlideData,
  makeMove
};
