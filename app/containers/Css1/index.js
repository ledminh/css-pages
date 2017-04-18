/*
 *
 * Css1
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss1 from './selectors';

import Ball from './ball';
import Wall from './wall';

export class Css1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Bouncing Ball"
          meta={[
            { name: 'description', content: 'Description of Css1' },
          ]}
        />
        <Wall position="left" />
        <Ball />
        <Wall position="right" />
      </div>
    );
  }
}

Css1.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CSS_1: makeSelectCss1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css1);
