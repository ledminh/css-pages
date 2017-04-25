import { createSelector } from 'reselect';

/**
 * Direct selector to the css7 state domain
 */
const selectCss7Domain = () => (state) => state.get('css7');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css7
 */

const makeSelectCss7 = () => createSelector(
  selectCss7Domain(),
  (substate) => substate.toJS()
);


const makeSlideData = () => createSelector(
  selectCss7Domain(),
  (substate) => substate.get('slide_data').toJS()
);

const makeMove = () => createSelector(
  selectCss7Domain(),
  (substate) => substate.get('move')
);

export default makeSelectCss7;

export {
  selectCss7Domain,
  makeSlideData,
  makeMove
};
