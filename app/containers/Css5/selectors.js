import { createSelector } from 'reselect';

/**
 * Direct selector to the css5 state domain
 */
const selectCss5Domain = () => (state) => state.get('css5');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css5
 */

const makeSelectCss5 = () => createSelector(
  selectCss5Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss5;
export {
  selectCss5Domain,
};
