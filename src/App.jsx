import React from 'react';
import { Router } from 'react-router';
import { Route, Link, Switch } from 'react-router-dom';
import gist from './Utils';
import NavBar from './NavBar';
import List from './List';
import MarkDown from './Markdown';
import history from './history';
import Editor from './Editor/Editor';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],
    };
    this.handleFetchGists = this.handleFetchGists.bind(this);
  }


  componentDidMount() {
    gist.getGists().then(({ data, ...other }) => {
      console.log(data, other);
      this.setState({ data });
    });
  }


  handleFetchGists(page) {
    console.log(page);
    gist.getGists(page).then(({ data, ...other }) => {
      console.log(data, other);
      this.setState({ data, page });
    });
  };

  render() {
    const { page } = this.state;
    return (
      <Router history={history}>
        <NavBar />
        <div className="content">


          <Switch>
            <Route path="/" exact>
              <List page={page} onChnage={this.handleFetchGists} data={this.state.data} />
            </Route>
            <Route exact path="/gists/new">
              <Editor />
            </Route>
            <Route path="/gists/:id">
              <MarkDown />
            </Route>

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
