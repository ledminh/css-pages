import styled, {keyframes} from 'styled-components';
import React from 'react';



const darken = keyframes`
    0% {
      opacity: 0;
    }

    25% {
      opacity: .9
    }


    75% {
      opacity: 1;
    }
`;

const Frame = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;


`;

const NightSky = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  z-index: 48;

  background-color: black;
`;

const Star = styled.div`
  position: absolute;
  top:  ${props => props.top}%;
  left: ${props => props.left}%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 0px 20px white;
`;

const BlueSky = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  z-index: 49;

  animation: ${darken} 5s linear infinite alternate;
  background-color: #7EC0EE;
`;


const setStar = (num) => [...Array(num).keys()].map((key) => <Star key={key} top={Math.random()*100} left={Math.random()*100}/>)

export default ({children}) => (
  <Frame>
      <NightSky>
          {
            setStar(200)
          }
      </NightSky>
      <BlueSky />
      {children}
  </Frame>
);
