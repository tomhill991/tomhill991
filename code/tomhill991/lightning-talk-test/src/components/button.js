import React from 'react'

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
      <div className="lt-buttons">
      <button onClick={this.increment}>Up Vote Button Page: {this.state.votes}</button>
      <button onClick={this.decrement}>Down Vote Button Page: {this.state.votes}</button>
      </div>
    )
  }
}

export default Buttons
