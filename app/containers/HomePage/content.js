import styled from 'styled-components';
import React from 'react';

const Style = styled.div`
  width: 70%;
  min-width: 400px;
  margin: auto;
  margin-top: 25px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const Content = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`;

const Tag = styled.div`
  border: 1px solid black;
  background-color: ${props => props.odd? 'white' : '#dedfe0'};

  border-radius: 10px;
  padding: 5px 0px 5px 15px;
  font-weight: bold;

  margin-bottom: 10px;
  
  cursor: pointer;
  &:hover {
    background-color: #83b3e2;
  }
`;

export default ({data}) => (
  <Style>
      <Content>
          {
            data.map((elem, i) => <Tag key={i} odd={i%2 === 1} onClick={() => open(elem.link)}>{elem.name}</Tag>)
          }
      </Content>
  </Style>
);;
