// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={
        (event) => {
          event.persist();
          setTimeout( () => this.props.onDelayedClick(event), this.props.delay);
        }
      }></button>
    )
  }
}

export default DelayedButton;
