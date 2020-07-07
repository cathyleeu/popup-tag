import React from 'react';
import axios from 'axios';
import './GuessMe.css';

class GuessMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      loaded: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async handleSubmit(e) {
    e.preventDefault();
    const {content} = this.state;
    const res = await axios.post(
      'http://localhost:5001/mystical-option-280602/us-central1/webApi/analyze/comment',
      {content}
    );
    console.log(res);
  }
  render() {
    return (
      <div>
        <h1>Guess Me</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="4" cols="50" name="content" value={this.state.content} onChange={this.handleChange}/>
          <input value="Send" type="submit"/>
        </form>
      </div>
    )
  }
}

export default GuessMe;
