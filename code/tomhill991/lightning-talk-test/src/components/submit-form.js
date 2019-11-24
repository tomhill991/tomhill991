import React from 'react'

const lightningTalkArray = [
  {
  title: '',
  description: ''
  }

];

class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightningTalk: lightningTalkArray
    }
  }

  // when the form is submitted
  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log(data)
  }

  // when there is a change in the input of the form
  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)

  }

  render() {

    return (
      <div>
      <h1>Submit your pitch here</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter Title" name="title" onChange={this.handleInputChange
        } />
        <input type="text" placeholder="Enter Description" name="description" onChange={this.handleInputChange
        } />
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default SubmitForm
