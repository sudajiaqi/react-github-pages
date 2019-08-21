/* eslint-disable react/no-unused-state */
import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import List from './List';
import MarkDown from './Markdown';
import history from './history';
import Editor from './Editor/Editor';
import Context from './Context';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gist: null,
      setGist: this.setGist,
    };
  }

  setGist = (gists) => this.setState({ gists });

  render() {
    return (
      <Context.Provider value={this.state}>
        <Router history={history}>
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <List />
              </Route>
              <Route exact path="/gists/new">
                <Editor />
              </Route>
              <Route exact path="/gists/:id">
                <MarkDown />
              </Route>
              <Route exact path="/gists/:id/edit">
                <Editor />
              </Route>
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
