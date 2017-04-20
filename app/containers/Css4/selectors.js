import { createSelector } from 'reselect';

/**
 * Direct selector to the css4 state domain
 */
const selectCss4Domain = () => (state) => state.get('css4');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css4
 */

const makeSelectCss4 = () => createSelector(
  selectCss4Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss4;
export {
  selectCss4Domain,
};
