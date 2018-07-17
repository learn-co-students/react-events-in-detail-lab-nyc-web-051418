// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component{
  handleDelayClick = (event) => {
    // console.log(this.props)
    // debugger;
    event.persist()
    setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay)
  }
  render() {

    return(<button type="button" onClick={this.handleDelayClick}></button>)
  }


}

export default DelayedButton;
