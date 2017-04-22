import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  ${props => props.styles}
`;

const Front = styled.div`
  position: absolute;
  top: 20%;
  bottom: 0px;
  left: 0px;
  right: 20%;

  background-color: white;

  border: 4px solid ${props => props.color};;
`;

const Top = styled.div`
  position: absolute;
  top: 0%;
  bottom: 80%;
  left: 0px;
  right: 20%;

  transform-origin: left bottom;
  transform: skewX(-50deg);

  background-color: white;


  border-top: 4px solid ${props => props.color};
  border-bottom: 0px;
  border-left: 8px solid ${props => props.color};
  border-right: 4px solid ${props => props.color};
`;

const Right = styled.div`
  position: absolute;
  top: 20%;
  bottom: 0px;
  left: 80%;
  right: -4px;

  border-top: 4px solid ${props => props.color};
  border-bottom: 4px solid ${props => props.color};
  border-left: 0px;
  border-right: 4px solid ${props => props.color};


  transform-origin: left bottom;
  transform: skewY(-40deg);
`;

const Shadow = styled.div`
  position: absolute;
  top: 80%;
  bottom: 0%;
  left: 80%;
  right: -60%;

  background: linear-gradient(to right, gray, white);

  transform-origin: left bottom;
  transform: skewX(-50deg);

`;

export default ({color, styles}) => (
  <Frame styles={styles}>
      <Front color={color}/>
      <Top color={color}/>
      <Right color={color}/>
      <Shadow />
  </Frame>
);
