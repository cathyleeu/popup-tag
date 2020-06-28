import React from 'react';
import axios from 'axios';
import './GuessMe.css';

class GuessMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: '',
      loaded: false
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Guess Me</h1>
        <form>
        <textarea rows="4" cols="50" name="story" value={this.state.story} onChange={this.handleChange}/>
        <button>Send</button>
        </form>
      </div>
    )
  }
}

export default GuessMe;
