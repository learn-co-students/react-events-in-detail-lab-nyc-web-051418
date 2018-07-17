// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  handleClick = (event) => {
  let position=[event.clientX,event.clientY]
  // console.log(position)
  // console.log(this.props.onReceiveCoordinates)
  return this.props.onReceiveCoordinates(position)
  }

  render() {

    return(<button type="button" onClick={this.handleClick}> </button>)
  }


}

export default CoordinatesButton;
