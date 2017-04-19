import React from 'react';
import styled, {keyframes} from 'styled-components';

const Style = styled.div`
  position: relative;
  width: 70%;
  margin-left: 10%;
  margin-top: 25%;

  padding: 20px;

`;

const floor_animate = keyframes`
  from {
    width: 0%
  }

  to {
    width: 100%
  }
`;

const Floor = styled.div`
  position: absolute;
  top: 50%;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: 4px dotted black;
  border-left: 4px dotted black;
  border-bottom: 4px solid black;
  transform-origin: left bottom;
  transform: skewX(-50deg);

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    bottom:0px;
    left: 0px;
    background: linear-gradient(to right, #f4eccd, #f4cdcd, #cdecf4);

    animation: ${floor_animate} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;


  }
`;

const Front = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border: 4px solid black;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    bottom:0px;
    left: 0px;
    opacity: .7;
    background-color: gray;

    animation: ${floor_animate} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;


  }
`;

const Top = styled.div`
  position: absolute;
  top: -50%;
  bottom: 100%;
  left: 0px;
  width: 100%;
  border: 4px solid black;
  transform-origin: left bottom;
  transform: skewX(-50deg);

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    bottom:0px;
    left: 0px;
    opacity: .7;
    background-color: gray;

    animation: ${floor_animate} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;


  }
`;


const Left = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 98px;
    border-right: 4px dotted black;
    transform-origin: left bottom;
    transform: skewY(-39deg);
`;


const Right = styled.div`
    position: absolute;
    top: 0px;
    left: 100%;
    bottom: 0px;
    width: 94px;
    border: 4px solid black;
    transform-origin: left bottom;
    transform: skewY(-40deg);
`;

export default ({children}) => (
  <Style>
      <Floor />
      <Left />
      {children}
      <Right />
      <Top />
      <Front />
  </Style>
);
