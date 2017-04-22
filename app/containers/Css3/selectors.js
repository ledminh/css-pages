import { createSelector } from 'reselect';

/**
 * Direct selector to the css3 state domain
 */
const selectCss3Domain = () => (state) => state.get('css3');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Css3
 */

const makeSelectCss3 = () => createSelector(
  selectCss3Domain(),
  (substate) => substate.toJS()
);

export default makeSelectCss3;
export {
  selectCss3Domain,
};
