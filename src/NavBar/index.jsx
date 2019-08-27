import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { USER_AVATAR as AVATAR, USER_NAME as NMAE } from '../Constants';
import Menu from '../Menu';
import gist from '../Utils';
import github from './github.svg';
import './NavBar.css';
import { consumer } from '../Context';


class NavBar extends React.Component {
  state = {
    userName: NMAE,
    userAvatar: AVATAR,
  };

  componentDidMount() {
    gist.getUser()
      .then(({ data }) => {
        const { avatar_url: userAvatar, public_gists: publicGists, login: userName } = data;
        const { context } = this.props;
        context.setGists(publicGists);
        this.setState({
          userName,
          userAvatar,
        });
      });
  }

  render() {
    const { userName, userAvatar } = this.state;
    return (
      <header className="header">

        <nav className="nav">
          <div className="nav-item">
            <a href={`https://github.com/${userName}`}>
              <img className="github" src={github} alt="github" />
            </a>
            <NavLink className="nav-link" to="/">
              All Blog
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </div>
          <Menu render={userAvatar && <img className="avatar" src={userAvatar} alt="avatat" />}>
            <NavLink
              className="nav-menu-item"
              to="/setting"
            >
              <Menu.Item>Setting</Menu.Item>
            </NavLink>
          </Menu>
        </nav>
      </header>
    );
  }
}

NavBar.propTypes = {
  context: PropTypes.shape().isRequired,
};

export default consumer(NavBar);
