import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {   
    event.preventDefault();
    console.log("newer")
    this.props.addBand(this.state.name);
    console.log(this.state)
    this.setState({ name: '' })
  }

  render() {
    console.log("new")
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Enter a Band:
          <input 
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}
            />
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
