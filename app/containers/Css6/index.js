/*
 *
 * Css6
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss6 from './selectors';

import Cube from './cube';
import Frame from './frame';

export class Css6 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Css6"
          meta={[
            { name: 'description', content: 'Description of Css6' },
          ]}
        />
        <Frame>
          <Cube side_width={200} color={'rgba(90, 135, 206, .4)'}/>
          <Cube side_width={180} color={'rgba(255, 242, 104, .6)'} />
          <Cube side_width={160} color={'rgba(90, 135, 206, .4)'}/>
          <Cube side_width={140} color={'rgba(255, 242, 104, .6)'} />
          <Cube side_width={120} color={'rgba(90, 135, 206, .4)'}/>
          <Cube side_width={100} color={'rgba(255, 242, 104, .6)'} />
          <Cube side_width={80} color={'rgba(90, 135, 206, .4)'}/>
          <Cube side_width={60} color={'rgba(255, 242, 104, .6)'} />
        </Frame>
      </div>
    );
  }
}

Css6.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Css6: makeSelectCss6(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css6);
