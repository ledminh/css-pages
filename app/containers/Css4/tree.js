import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: absolute;
  top: -10%;
  right: 10%;

  width: 120px;
  height: 120px;

  z-index: 50;

`;

const Trunk = styled.div`
  position: absolute;
  top: 30%;
  bottom: 0%;
  left: 38%;
  right: 38%;
  background-color: #533118;
  border-radius: -14px;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 100%;

    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;

    border-right: 4px solid black;

  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 97%;
    right: 0%;

    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;

    border-left: 4px solid black;
  }
`;

const Leaf = styled.div`
  position: absolute;
  top: 15%;
  bottom: 55%;
  left: ${props => (props.side === "left")? '0%' : '40%' };
  right: ${props => (props.side === "left")? '40%' : '0%' };;


  transform: ${props => (props.side === "left")? 'skewY(-40deg)' : 'skewY(40deg)' };

  &::before {
    content: "";
    position: absolute;

    top: -70%;
    bottom: -60%;
    left: -10%;
    right: 15%;

    background-color: #3A5F0B;

    border-radius: 50%;

    transform: ${props => (props.side === "left")? 'skewY(40deg)' : 'skewY(-40deg)' };
  }

  &::after {
    content: "";
    position: absolute;

    top: -90%;
    bottom: -60%;
    left: 15%;
    right: -10%;

    background-color: #3A5F0B;

    border-radius: 50%;


    transform: ${props => (props.side === "left")? 'skewY(40deg)' : 'skewY(-40deg)' };
  }
`

const LeafTop = styled.div`
  position: absolute;
  top: -20%;
  bottom: 80%;
  left: 30%;
  right: 30%;

  background-color: #3A5F0B;

  border-radius: 50%;

`;

export default (props) => (
  <Frame>
      <Trunk />
      <LeafTop />
      <Leaf side="left"/>
      <Leaf side="right"/>
  </Frame>
);
