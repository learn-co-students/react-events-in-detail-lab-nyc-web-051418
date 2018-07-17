// Code CoordinatesButton Component Here

import React, { Component } from 'react';

class CoordinatesButton extends Component {
    constructor(props){
      super(props)
    }

    onClick = (e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }


    render(){
      return(
        <div>
          <button onClick={this.onClick}>this is a button</button>
        </div>
      )

    }

}

export default CoordinatesButton;
