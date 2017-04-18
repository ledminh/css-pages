import { createSelector } from 'reselect';

/**
 * Direct selector to the css1 state domain
 */
const selectCss1Domain = () => (state) => state.get('css1');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css1
 */

const makeSelectCss1 = () => createSelector(
  selectCss1Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss1;
export {
  selectCss1Domain,
};
