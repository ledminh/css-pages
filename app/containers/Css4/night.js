import styled, {keyframes} from 'styled-components';

const dayNight = keyframes`
  from {
    opacity: .95;
  }

  to {
    opacity: 0;
  }
`;

export default styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  background-color: black;

  animation: ${dayNight} 5s linear infinite alternate;

  z-index: 100;
`;
