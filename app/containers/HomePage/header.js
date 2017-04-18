import styled from 'styled-components';
import React from 'react';

const Style = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  border-bottom: 8px double #19335e;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #591818;
`

const Header = (props) => (
  <Style>
      CSS PAGES
  </Style>
);

export default Header;
