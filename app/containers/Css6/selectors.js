import { createSelector } from 'reselect';

/**
 * Direct selector to the css6 state domain
 */
const selectCss6Domain = () => (state) => state.get('css6');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css6
 */

const makeSelectCss6 = () => createSelector(
  selectCss6Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss6;
export {
  selectCss6Domain,
};
