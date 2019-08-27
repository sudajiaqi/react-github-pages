/* eslint-disable react/no-unused-state */
import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import Switch from './Switch';
import NavBar from './NavBar';
import List from './List';
import history from './history';
import Context from './Context';
import { Provider, visible } from './Context/Authentication';
import Gist, { Editor } from './Gist';
import { cookies } from './Utils';
import Error from './Error';
import Setting from './Setting';
import Markdown from './Markdown';
import { DESCRIPTION } from './Constants';
import './App.css';

const AuthRoute = visible(Route);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gist: null,
      setGist: this.setGist,
      gists: 1,
      setGists: this.setGists,
    };
  }

  setGist = (gist) => this.setState({ gist });

  setGists = (gists) => this.setState({ gists });

  render() {
    return (
      <Context.Provider value={this.state}>
        <Provider defaultVisible={!!cookies.getToken()}>
          <Router history={history}>
            <NavBar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <List />
                </Route>
                <AuthRoute exact path="/gists/new">
                  <Editor />
                </AuthRoute>
                <Route path="/gists/:id">
                  <Gist />
                </Route>
                <Route exact path="/error" component={Error} />
                <Route exact path="/about">
                  <Markdown data={DESCRIPTION} />
                </Route>
                <Route exact path="/setting" component={Setting} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </Context.Provider>
    );
  }
}

export default App;
