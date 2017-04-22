import styled from 'styled-components';
import React from 'react';

export default styled.div`
  position: relative;
  transform: translate(0, 15%);
  display: inline-block;
  ${props => props.styles}
`;
