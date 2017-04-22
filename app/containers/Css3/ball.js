import styled, {keyframes} from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

const spring_like =  (endpoint) => {
  return  keyframes`
            from {
              transform: translate(0px, 0px) rotate(0deg);
            }

            to {
              transform: translate(calc(${endpoint + 'px'} - 100%), 0px) rotate(360deg);

            }
          `;
}


const Style = styled.div`
  display: inline-block;
  transform-origin: center;
`;


const shadowAnimate = (endpoint) => {
  return keyframes`
      from {
        transform: translate(0px, 0px);
      }

      to {
        transform: translate(calc(${endpoint + 'px'} - 100%), 0px)
      }
  `;
}


const Ball =  styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 0px;
  border: 1px solid black;
  text-align: center;
  transform-origin: center;
  overflow: hidden;
  animation: ${props => spring_like(props.endpoint)} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;

  background: linear-gradient(white, gray);

  &::before {
    content: "";

    display: inline-block;

    margin-right: 0px;
    margin-left: calc((100% - 6px)/4);

    width: 25%;
    height: 100%;

    border-left: 2px solid black;
    border-right: 1px solid black;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  &::after {
    content: "";
    display: inline-block;

    margin-right: calc((100% - 9px)/4);
    margin-left: 0px;

    width: 25%;
    height: 100%;

    border-left: 1px solid black;
    border-right: 2px solid black;

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;


const Shadow = styled.div`
  width: 100%;

  height: 10px;
  margin: auto;
  margin-top: 0px;
  text-align: center;

  animation: ${props => shadowAnimate(props.endpoint)} 3s cubic-bezier(.36,.57,.77,.44) infinite alternate;

  &::before {
    content: "";
    display: inline-block;
    width: 70%;
    height: 100%;

    background-color: gray;
    box-shadow: 0px 0px 10px;

    border-radius: 50%;
  }
`;


export default class MainComponent extends React.PureComponent {
  constructor(props){
      super(props);

      this.state  = {
        endpoint: 0
      }

      this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    let parrentNode = ReactDOM.findDOMNode(this).parentNode;
    let computedStyle = window.getComputedStyle(parrentNode, null);

    let padRight = parseInt(computedStyle.getPropertyValue('padding-right'));
    let padLeft = parseInt(computedStyle.getPropertyValue('padding-left'));
    let width = parseInt(computedStyle.getPropertyValue('width'));

    this.setState({
      endpoint: width - (padRight + padLeft)
    });
  }


  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('load', this.updateDimensions);
  }

  componentWillUnMount(){
    window.removeEventListener('resize', this.updateDimensions);
    window.addEventListener('load', this.updateDimensions);
  }


  render() {
    return (
      <Style>
        <Ball endpoint={this.state.endpoint}/>
        <Shadow endpoint={this.state.endpoint}/>
      </Style>
    )
  }
};
