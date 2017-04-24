import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  0% { transform: rotateY(0);}
  100% { transform: rotateY(360deg);}
`;

const Stage = styled.div`
    position: fixed;
    top: 100px;
    left: 100px;

    width: 100px;
    height: 100px;

    border: 4px dotted red;

    perspective: 1600px;
    perspective-origin: 50% -240px;

`;

const Plane = `
  display: block; position: absolute;
  width: 100px; height: 100px;
  transform-origin: 50% 50% 0;
  border: 4px solid black;
`

const Cube  = styled.div`
  transform-style: preserve-3d;
  transform-origin: center;
  animation: ${rotate} 10s infinite linear;
`;

const Front = styled.div`
  ${Plane}
  transform: translateZ(50px);
`;

const Top = styled.div`
  ${Plane}
  transform: rotateX(90deg) translateZ(50px);
`;

const Bottom = styled.div`
  ${Plane}
  transform: rotateX(-90deg) translateZ(50px);
`;

const Left = styled.div`
  ${Plane}
  transform: rotateY(-90deg) translateZ(50px);
`;

const Right = styled.div`
  ${Plane}
  transform: rotateY(90deg) translateZ(50px);
`;

const Back = styled.div`
  ${Plane}
  transform: rotateY(180deg) translateZ(50px);
`;



export default (props) => (
  <Stage>
    <Cube>
        <Front />
        <Back />
        <Top />
        <Bottom />
        <Left />
        <Right />
    </Cube>
  </Stage>
);
