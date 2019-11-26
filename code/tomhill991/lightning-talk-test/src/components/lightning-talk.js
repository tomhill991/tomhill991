import React from "react"
import Buttons from './button.js';
import './lightning-talk.css';

class LightningTalk extends React.Component {
    constructor(props){
    super(props);
    this.state = {votes: 0}
  }

   increment = (e) => {
    this.setState({
      votes : this.state.votes + 1
    })
  }

   decrement = (e) => {
    this.setState({
      votes : this.state.votes - 1
    })
  }

  render () {
    const title = this.props.lightningTalk.title
    const description = this.props.lightningTalk.description

    return (
      <div className="lightning-talk-item">
        <div className="lt-text">
          <div className="lt-title"> {title}</div>
          <div className="lt-description"> {description}</div>
        </div>
        <Buttons increment={this.increment} decrement={this.decrement} votes={this.state.votes}/>
      </div>
      )
  }

}

export default LightningTalk;
