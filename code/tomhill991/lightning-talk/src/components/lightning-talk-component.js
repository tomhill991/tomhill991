import React from "react"

// votes initial state is set to 0 as all lightning talks will start with zero votes
class LightningTalk extends React.Component {
    constructor(props){
    super(props);
    this.state = {votes: 0}
  }
  // when the page renders (loads), pass title and description to parent function (App) as props
  render () {
    const title = this.props.lightningTalk.title
    const description = this.props.lightningTalk.description
    return (
      <div class="lightning-talk-item">
          <div className="lt-title"> TItle: {title}</div>
          <div className="lt-description"> Description: {description}</div>
      </div>
      )
    }
  }



export default LightningTalk;
