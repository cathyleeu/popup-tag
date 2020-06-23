import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      tags: [],
      loaded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchTags = this.fetchTags.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  fetchTags(e) {
    e.preventDefault();
    // http://localhost:5001/mystical-option-280602/us-central1/webApi/fetch?url=
    axios.get(`http://localhost:5001/mystical-option-280602/us-central1/webApi/fetch?url=${this.state.url}`)
      .then(
        (result) => {
          let tags = result.data.tags.map((tag, i) => tag.name);
          tags.push('etc')
          this.setState({ tags, loaded: true })
        },
        (error) => {
          console.log('ERROR');
        }
      )
  }
  postUrlWithTags(e) {
    e.preventDefault();
    // axios.post()
    this.setState({ url: '', loaded: false })
  }
  render() {
    return (
      <div className="App">
        <h1>Tag URL</h1>
        {
          this.state.tags.length > 0 &&
            <div className="tags-cont"> 
              { this.state.tags.map((tag, i) => <p key={i}>{tag}</p>) }
              <p>Add TAG</p> 
            </div>
        }
        <form className="url-form">
          <input className="url-form-input" type="text" name="url" value={this.state.url} onChange={this.handleChange} placeholder='Add Url' />
          {
            this.state.loaded 
              ? <input className="url-form-button" type="button" value="Confirm" onClick={this.postUrlWithTags}/>
              : <input className="url-form-button" type="button" value="Find" onClick={this.fetchTags}/>
          }
          
        </form>
      </div>
    )
  }
}

export default App;
