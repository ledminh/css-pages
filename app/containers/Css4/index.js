/*
 *
 * Css4
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCss4 from './selectors';

import Sun from './sun';
import Sky from './sky';
import Grass from './grass';
import House from './house';
import Tree from './tree';
import SunTrail from './sun-trail';

import Night from './night';

export class Css4 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Green Field"
          meta={[
            { name: 'description', content: 'Description of Css4' },
          ]}
        />
        <div>
            <Sky/>
            <Night />
            <SunTrail>
              <Sun />
            </SunTrail>
            <Grass>
                <House height={100}/>
                <Tree />
            </Grass>          
        </div>
      </div>
    );
  }
}

Css4.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Css4: makeSelectCss4(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Css4);
