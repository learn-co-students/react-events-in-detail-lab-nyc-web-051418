// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    console.log(this.props.onReceiveCoordinates([event.screenX,event.screenY]));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Coordinates Button </button>
      </div>
    )
  }
}
