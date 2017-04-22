/*
 *
 * Css3
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss3 from './selectors';

import Ball from './ball';
import Block from './block';

import Trail from './trail';

import Frame  from './frame';

const styleLeft = `
  position: absolute;
  left: 0px;
  width: 150px;
  height: 150px;
`;

const styleRight = `
  position: absolute;
  right: 100px;
  width: 150px;
  height: 150px;
`;

const styleTrail = `
  position: absolute;
  left: 130px;
  right: 230px;
`;

export class Css3 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Ball and Blocks"
          meta={[
            { name: 'description', content: 'Ball and Blocks' },
          ]}
        />
        <Frame>
          <Block color="black" styles={styleLeft} />

          <Trail styles={styleTrail}>
            <Ball />
          </Trail>

          <Block color="black" styles={styleRight} />

        </Frame>

      </div>
    );
  }
}

Css3.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Css3: makeSelectCss3(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css3);
