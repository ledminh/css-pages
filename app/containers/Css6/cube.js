import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const bg_color = (color) => `
  background-color: ${color};
`;


const boom = (rotate, from, to) => keyframes`
  from {
    transform: ${rotate} translateZ(${from}px);
  }

  to {
    transform: ${rotate} translateZ(${to}px);
  }
`;


const Frame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  width: ${props => props.side_width}px;
  height: ${props => props.side_width}px;

  transform-style: preserve-3d;


  animation: ${rotate} 9s infinite linear;

`;

const Front = styled.div`

   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   transform: translateZ(${props => props.side_width/2}px);

   animation: ${props => boom('', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "1";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

const Back = styled.div`
   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   animation: ${props => boom('rotateX(180deg)', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "2";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

const Left = styled.div`
   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   animation: ${props => boom('rotateY(90deg)', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "3";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

const Right = styled.div`
   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   animation: ${props => boom('rotateY(-90deg)', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "4";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

const Top = styled.div`
   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   animation: ${props => boom('rotateX(90deg)', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "5";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

const Bottom = styled.div`
   position: absolute;

   top: 0%;
   left: 0%;

   width: 100%;
   height: 100%;

   ${props => bg_color(props.color)}

   animation: ${props => boom('rotateX(-90deg)', props.side_width/2, props.side_width)} 1s infinite linear alternate;

   &::before {
     content: "6";

     position: absolute;
     top: 50%;
     left: 50%;

     background-color: white;
     padding: 10px;
     border-radius: 50%;

     font-weight: bold;
     font-size: 20px;

     transform: translate(-50%, -50%);
   }
`;

export default ({side_width, color}) => (
  <Frame side_width={side_width}>
      <Front side_width={side_width} color={color}/>
      <Back side_width={side_width} color={color}/>
      <Left side_width={side_width} color={color}/>
      <Right side_width={side_width} color={color}/>
      <Top side_width={side_width} color={color} />
      <Bottom side_width={side_width} color={color}/>
  </Frame>
);
