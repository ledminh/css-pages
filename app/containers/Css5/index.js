/*
 *
 * Css5
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss5 from './selectors';

import Cube from './cube';
import Ball from './ball';

export class Css5 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Css5"
          meta={[
            { name: 'description', content: 'Description of Css5' },
          ]}
        />
        <Ball />
      </div>
    );
  }
}

Css5.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Css5: makeSelectCss5(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css5);
