// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (event) => {
    const mouseCoordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(mouseCoordinates);
  }


  render() {
    return (
      <button onClick={this.handleClick}>CoordinatesButton</button>
    )
  }
}

export default CoordinatesButton;
