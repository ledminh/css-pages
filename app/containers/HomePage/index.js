/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage, {makeSelectLinks} from './selectors';

import {requestLinks} from './actions';

import Header from './header';
import Content from './content';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
      this.props.initData();
  }

  render() {
    return (
      <div>
        <Helmet
          title="::: CSS PAGES"
          meta={[
            { name: 'description', content: 'My CSS playground' },
          ]}
        />
        <Header />
        <Content data={this.props.links}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
  links: makeSelectLinks()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    initData: () => dispatch(requestLinks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
