import React from "react"
import Buttons from './button.js';
import './lightning-talk.css';

// create list item first
// add title, description, vote number, to the list item (all variables)
// add buttons to right
// make buttons change voting numbers

class LightningTalk extends React.Component {


  render () {
    const title = this.props.lightningTalk.title
    const description = this.props.lightningTalk.description
    return (
      <div className="lightning-talk-item">
        <div className="lt-text">
          <div className="lt-title"> {title}</div>
          <div className="lt-description"> {description}</div>
        </div>
        < Buttons />
      </div>
      )
  }
}

export default LightningTalk;
