import React from 'react';
import './Setting.css';
import Input from '../Input';
import Button from '../Button';
import gist, { cookies } from '../Utils';

class Setting extends React.Component {
  state = {
    token: '',
    error: false,
  };

  setToken = (token) => this.setState({ token });

  saveToken = () => {
    const { token } = this.state;
    gist.getAuthentication(token).then(({ data }) => {
      console.log(data);
      cookies.setToken(token);
    }, () => {
      this.setState({ error: true });
    });
  };

  render() {
    return (
      <div>
        <h2>Setting</h2>
        <hr />
        <h3>Token:</h3>{this.state.error && <div>This Token should has permission about Gist!</div>}
        <Input value={this.state.token} onChange={this.setToken} />
        <Button onClick={this.saveToken}>Save</Button>
      </div>
    );
  }
}

export default Setting;
