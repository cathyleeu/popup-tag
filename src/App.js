import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PopUpTags from './PopUpTags';
import GuessMe from './GuessMe';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Google Cloud Test</h1>
        <ul>
          <li>
            <Link to="/">PopUpTags(analyzeEntities)</Link>
          </li>
          <li>
            <Link to="/analyzeSentiment">Guess Me(analyzeSentiment)</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <PopUpTags />
          </Route>
          <Route path="/analyzeSentiment">
            <GuessMe />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;
