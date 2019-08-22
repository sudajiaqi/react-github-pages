/* eslint-disable react/no-unused-state */
import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import Switch from './Switch';
import NavBar from './NavBar';
import List from './List';
import history from './history';
import Context from './Context';
import Gist, { Editor } from './Gist';
import Error from './Error';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gist: null,
      setGist: this.setGist,
    };
  }

  setGist = (gist) => this.setState({ gist });

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
              <Route path="/gists/:id">
                <Gist />
              </Route>
              <Route exact path="/error" component={Error} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
