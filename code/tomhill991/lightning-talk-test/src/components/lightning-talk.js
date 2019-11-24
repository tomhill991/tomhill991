import React from "react"

// create list item first
// add title, description, vote number, to the list item (all variables)
//

class LightningTalk extends React.Component {
  render () {
    const title = this.props.lightningTalk.title
    const description = this.props.lightningTalk.description
    const votes = this.props.lightningTalk.votes
    return (
      <div className="lightning-talk-item">
        <div className="lt-votes"> {votes} </div>
        <div className="lt-text">
          <div className="lt-title"> {title}</div>
          <div className="lt-description"> {description}</div>
        </div>
      </div>
      )
  }
}

export default LightningTalk;
