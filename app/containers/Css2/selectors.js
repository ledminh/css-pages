import { createSelector } from 'reselect';

/**
 * Direct selector to the css2 state domain
 */
const selectCss2Domain = () => (state) => state.get('css2');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css2
 */

const makeSelectCss2 = () => createSelector(
  selectCss2Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss2;
export {
  selectCss2Domain,
};
