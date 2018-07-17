// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends React.Component {

  clickTest() {
  	console.log(test)
  }

  render() {
  	return(
  	  <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}></button>
  	)
  }
}

export default CoordinatesButton	