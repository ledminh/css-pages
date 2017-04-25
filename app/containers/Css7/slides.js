import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {makeSlideData, makeMove} from './selectors';

import {slide} from './actions';

const smoothenMove = `
  transition: left .6s, opacity .3s;
`;

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 350px;
  height: 350px;

  border: 10px double black;
  border-radius: 10%;

  padding: 10px;
  text-align: center;

  transform: translate(-50%, -50%);
  overflow: hidden;

  cursor: pointer;
`;

const Slide = styled.div`
  position: absolute;
  display: inline-block;
  top: 0%;
  left: ${props => props.left}
  width: 100%;
  height: 100%;

  text-shadow: 0px 0px 40px black;

  font-weight: 1000;
  font-size: 200px;

  color: #eaeaea;

  opacity: ${props => props.left === '0%'? '1' : 0}

  ${props => props.move? smoothenMove : ''}
`;



const MainComponent = ({onClick, dispatch,
                        slide_data, move}) => (
  <Frame onClick={onClick}>
      <Slide move={move} left={slide_data.slide_1.left}>{slide_data.slide_1.value}</Slide>
      <Slide move={move} left={slide_data.slide_2.left}>{slide_data.slide_2.value}</Slide>
      <Slide move={move} left={slide_data.slide_3.left}>{slide_data.slide_3.value}</Slide>
  </Frame>
);

const mapStateToProps = createStructuredSelector({
  slide_data: makeSlideData(),
  move: makeMove()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClick: () => dispatch(slide(true))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
