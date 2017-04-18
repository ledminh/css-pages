import styled, {keyframes} from 'styled-components';
import React from 'react';

const spring_like = keyframes`
    from {
      left: 25%;
    }

    to {
      left: 80%;
    }
`;

const Style = styled.div`
  position: fixed;
  top: 50%;
  transform-origin: center;

  animation: ${spring_like} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;
`;


const rolling = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

const Ball =  styled.div`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  background: linear-gradient(white, black);
  border: 1px solid black;

  transform-origin: center;

  animation: ${rolling} 3s linear infinite alternate;
`;

const Shadow = styled.div`
  width: 30px;
  height: 10px;
  background-color: gray;
  box-shadow: 0px 0px 10px;
  margin-top: 10px;
  border-radius: 50%;
`;

export default (props) => (
  <Style>
      <Ball />
      <Shadow />
  </Style>
);
