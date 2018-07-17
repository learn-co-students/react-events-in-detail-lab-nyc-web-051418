// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor(props){
    super(props)
  }

  onClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick}>delayted button component button</button>
      </div>
    );
  }


}

export default DelayedButton;
