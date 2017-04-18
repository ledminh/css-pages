import styled, {keyframes} from 'styled-components';
import React from 'react';


const Style = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(${props => (props.position === 'left')? '-100%' : '100%'}, -25%);
  ${props => (props.position === 'left')? 'left: 25%' : 'left: 75%'}
`;

const Front = styled.div`
  width: 30px;
  height: 100px;
  background-color: black;
`;

const Top = styled.div`
  width: 30px;
  height: 30px;
  background-color: #68696b;
  transform-origin: left bottom;
  transform: skewX(-60deg);
`;

const Side = styled.div`
  width: 52px;
  height: 100px;
  background-color: gray;
  transform-origin: bottom left;
  transform: translate(29px, -100px) skewY(-30deg);

`;


export default ({position}) => (
  <Style position={position}>
      <Top />
      <Front/>
      <Side />
  </Style>
);
