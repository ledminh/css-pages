/*
 *
 * Css7
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss8 from './selectors';

import {changeSlide} from './actions';

import Slides from './slides';

export class Css8 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Running Color Box"
          meta={[
            { name: 'description', content: 'Description of Css7' },
          ]}
        />
        <Slides />
      </div>
    );
  }
}

Css8.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  Css8: makeSelectCss8(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css8);
