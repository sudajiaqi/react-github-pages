/* eslint-disable react/no-unused-state */
import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import List from './List';
import history from './history';
import Context from './Context';
import { Editor, Gist } from './Gist';
import GistItem from './GistItem';
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
              <Route exact path="/gists/:id">
                <GistItem>
                  <Context.Consumer>
                    {({ gist }) => (
                      <Gist {...gist} />
                    )}
                  </Context.Consumer>
                </GistItem>
              </Route>
              <Route exact path="/gists/:id/edit">
                <GistItem>
                  <Context.Consumer>
                    {({ gist }) => (
                      <Editor {...gist} />
                    )}
                  </Context.Consumer>
                </GistItem>
              </Route>
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
