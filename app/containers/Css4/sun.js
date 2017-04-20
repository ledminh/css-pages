import styled, {keyframes} from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

const upDown = (y) => keyframes`
  from {
      transform: translateY(120%);
  }

  to {
     transform: translateY(calc(-120% - ${y}px));

  }
`;

const leftRight = (x) => keyframes`
  from {
      transform: translateX(-120%);
  }

  to {
     transform: translateX(calc(120% + ${x}px));

  }
`;



const Ball =  styled.div`
  position: absolute;
  display: inline-block;
  bottom: 0%;
  left: 0%;

  z-index: 50;
  
  animation: ${props => upDown(props.range.y)} 5s linear infinite alternate;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 0px;


    box-shadow: 0px 0px 10px #FDB813;
    background-color: #FDB813;

    animation: ${props => leftRight(props.range.x)} 10s linear infinite;
  }


`;


export default class MainComponent extends React.PureComponent {
  constructor(props){
      super(props);

      this.state  = {
        rangeX: 0,
        rangeY: 0
      }

      this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    let parrentNode = ReactDOM.findDOMNode(this).parentNode;
    let computedStyle = window.getComputedStyle(parrentNode, null);

    let padRight = parseInt(computedStyle.getPropertyValue('padding-right'));
    let padLeft = parseInt(computedStyle.getPropertyValue('padding-left'));
    let width = parseInt(computedStyle.getPropertyValue('width'));

    let padTop = parseInt(computedStyle.getPropertyValue('padding-top'));
    let padBottom = parseInt(computedStyle.getPropertyValue('padding-bottom'));
    let height = parseInt(computedStyle.getPropertyValue('height'));

    this.setState({
      rangeX: width - (padRight + padLeft),
      rangeY: height - (padTop + padBottom)
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
      <Ball range={{x:this.state.rangeX, y: this.state.rangeY}}/>
    )
  }
};
