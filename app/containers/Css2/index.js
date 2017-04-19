/*
 *
 * Css2
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss2 from './selectors';

import Ball from './ball';
import Frame from './frame';

export class Css2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Another Ball"
          meta={[
            { name: 'description', content: 'Description of Css2' },
          ]}
        />
        <Frame>
          <Ball />
        </Frame>
      </div>
    );
  }
}

Css2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Css2: makeSelectCss2(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css2);
