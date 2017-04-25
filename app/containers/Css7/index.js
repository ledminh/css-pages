/*
 *
 * Css7
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss7 from './selectors';

import {changeSlide} from './actions';

import Slides from './slides';

export class Css7 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Fibonacci Box"
          meta={[
            { name: 'description', content: 'Description of Css7' },
          ]}
        />
        <Slides />
      </div>
    );
  }
}

Css7.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  Css7: makeSelectCss7(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css7);
