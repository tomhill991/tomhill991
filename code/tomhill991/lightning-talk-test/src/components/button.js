import React from 'react'
import './button.css';

class Buttons extends React.Component {
  render(){

    return (
      <div className="lt-votes-container">
        <div className="lt-votes-number">
          <p>{this.props.votes}</p>
        </div>
          <div className="lt-buttons">
            <button onClick={this.props.increment}>Up Vote Button </button>
            <button onClick= {this.props.decrement}>Down Vote Button </button>
          </div>
      </div>

    )
  }
}

export default Buttons
