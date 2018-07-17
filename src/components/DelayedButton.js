// Code DelayedButton Component Here
import React, { Component } from 'react' 

class DelayedButton extends Component {

  handleTimeout(event) {
  	event.persist(); 
    window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
  	return(
  	  <button onClick={ (event) => {
  	  	event.persist();
  	  	window.setTimeout(this.props.onDelayedClick(event), this.props.delay);
  	  }}></button>
  	)
  }
}

export default DelayedButton

//  render() {
//   	return(
//   	  <button onClick={(event) => setTimeout(this.props.onDelayedClick(event), 1500)}></button>
//   	)
//   }
// }
