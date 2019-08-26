import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import gist, { cookies } from '../Utils';
import { consumner } from '../Context/Authentication';
import './Setting.css';

class Setting extends React.Component {
  state = {
    visible: !cookies.getToken(),
    token: cookies.getToken() || '',
    error: false,
  };

  setToken = (token) => this.setState({ token });

  saveToken = () => {
    const { token } = this.state;
    gist.getAuthentication(token)
      .then(() => {
        cookies.setToken(token);
        this.setVisible(true);
        this.setState({
          visible: false,
          error: false,
        });
      }, () => {
        this.setState({ error: true });
      });
  };

  setVisible = (value) => {
    const { context } = this.props;
    context.setVisible(value);
  };

  removeToken = () => {
    cookies.removeToken();
    this.setVisible(false);
    this.setState({
      token: '',
      visible: true,
    });
  };

  render() {
    const { error, token, visible } = this.state;
    return (
      <div>
        <h2>Setting</h2>
        <hr />
        <div className="token-setting">
          <h3>Token:</h3>
          {error && <div className="error">This Token should has permission about Gist!</div>}
        </div>
        {visible ? (
          <>
            <Input value={token} onChange={this.setToken} />
            <Button tton onClick={this.saveToken}>Save Token</Button>
          </>
        ) : <Button onClick={this.removeToken}>Remove Token</Button>}
      </div>
    );
  }
}

Setting.propTypes = {
  context: PropTypes.shape().isRequired,
};

export default consumner(Setting);
