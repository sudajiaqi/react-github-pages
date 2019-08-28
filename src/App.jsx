/* eslint-disable react/no-unused-state */
import React, { Suspense } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import Switch from './Switch';
import NavBar from './NavBar';
import history from './history';
import Context from './Context';
import { Provider, visible } from './Context/Authentication';
import { cookies } from './Utils';
import Error from './Error';
import Setting from './Setting';
import { DESCRIPTION, TITLE } from './Constants';
import './App.css';

const List = React.lazy(() => import('./List'));
const Gist = React.lazy(() => import('./Gist'));
const Editor = React.lazy(() => import('./Gist/Editor'));
const Markdown = React.lazy(() => import('./Markdown'));

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

  componentDidMount() {
    if (TITLE) {
      document.title = TITLE;
    }
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
                  <Suspense fallback={<div>Loading</div>}>
                    <List />
                  </Suspense>
                </Route>
                <AuthRoute exact path="/gists/new">
                  <Suspense fallback={<div>Loading</div>}>
                    <Editor />
                  </Suspense>
                </AuthRoute>
                <Route path="/gists/:id">
                  <Suspense fallback={<div>Loading</div>}>
                    <Gist />
                  </Suspense>
                </Route>
                <Route exact path="/error" component={Error} />
                <Route exact path="/about">
                  <Suspense fallback={<div>Loading</div>}>
                    <Markdown data={DESCRIPTION} />
                  </Suspense>
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
