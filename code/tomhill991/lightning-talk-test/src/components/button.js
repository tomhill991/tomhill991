import React from 'react'
import './button.css';

class Buttons extends React.Component {
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
  render(){
    return (
      <div className="lt-votes-container">
        <div className="lt-votes-number">
        <p>{this.state.votes}</p>
        </div>
          <div className="lt-buttons">
            <button onClick={this.increment}>Up Vote Button </button>
            <button onClick={this.decrement}>Down Vote Button </button>
          </div>
      </div>

    )
  }
}

export default Buttons
