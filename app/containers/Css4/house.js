import styled from 'styled-components';
import React from 'react';



const Frame = styled.div`
  position: relative;
  top: -10%;
  left: 10%;

  width: ${props => props.height*335/170}px;
  height: ${props => props.height}px;

  z-index: 50;

`;

const Front = styled.div`
  position: absolute;
  top: 40%;
  bottom: 0%;
  left: 10%;
  right: 36%;

  background-color: #8b5a2b;

  border: 4px solid black;

  &::before {
    position: absolute;
    content: "";
    bottom: 0%;
    right: 50%;

    width: 20%;
    height: 58%;

    background-color: #e5b07e;
    border: 4px solid black;

    border-top-left-radius: 40%;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0%;
    left: 50%;

    width: 20%;
    height: 58%;

    background-color: #e5b07e;
    border: 4px solid black;

    border-top-right-radius: 40%;
  }
`;

const Back = styled.div`
  position: absolute;
  top: 20%;
  bottom: 20%;
  left: 30%;
  right: 16%;

  background-color: #ffa54f;

  border: 4px solid black;
`;

const FrontRoof = styled.div`
  position: absolute;
  top: 0%;
  bottom: 35%;
  left: 0%;
  right: 45%;

  background-color: #8b5a2b;

  border: 4px solid black;
  transform-origin: left bottom;
  transform: skewX(-35deg);
`;


const BackRoof = styled.div`
  position: absolute;
  top: 0%;
  bottom: 55%;
  left: 45%;
  right: 0%;

  border: 4px solid black;
  background-color: #a0522d;

  transform-origin: left bottom;
  transform: skewX(46deg);

`;

const Side = styled.div`
  position: absolute;
  top: 40%;
  bottom: 0%;
  left: 64%;
  right: 15.6%;

  border-bottom: 4px solid black;
  border-right: 4px solid black;
  border-top: 4px solid black;

  background-color: #8b5a2b;

  transform-origin: left bottom;
  transform: skewY(-25deg);



  &::before {
    position: absolute;
    content: "";
    top: 20%;
    bottom: 45%;
    left: 20%;
    right: 40%;


    background: #ffa54f;
    border: 4px solid black;

    }




`;

export default ({height}) => (
  <Frame height={height}>
      <BackRoof />
      <Back />
      <Front />
      <Side />
      <FrontRoof />
  </Frame>
);
