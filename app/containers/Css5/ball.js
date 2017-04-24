import React from 'react';
import styled, {keyframes} from 'styled-components';

const upDown = keyframes`
  25% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(-100px);
  }
`;


const shrink = keyframes`
  100% {
    transform: scale(1.2, 1.2) translateX(-50%) translateY(60%) rotateX(80deg);
    filter: blur(25px);
  }
`;

const forward = keyframes`
  100% {
    transform: translateX(400px);
  }
`;

const Frame  = styled.div`
  position: fixed;

  top: 200px;
  left: 200px;

  width: 100px;
  height: 100px;

  perspective: 1600px;

  animation: ${forward} 2s linear infinite alternate;
`;


const Ball = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  background: radial-gradient(circle at 20% 20%, white, #0c254c);

  animation: ${upDown} 1s cubic-bezier(.53,.83,.66,.85) infinite alternate;

`;

const Shadow = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;

  width: 80%;
  height: 100%;

  border-radius: 50%;

  background: radial-gradient(black, white);;

  filter: blur(15px);
  transform: translateX(-50%) translateY(60%) rotateX(80deg);

  animation: ${shrink} 1s linear infinite alternate;
`;


export default () => (
  <Frame>
      <Ball />
      <Shadow />
  </Frame>
)
