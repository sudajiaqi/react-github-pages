import React from 'react';
import { NavLink } from 'react-router-dom';
import { userName as NMAE, userAvatar as AVATAR } from '../Constants';
import Menu from '../Menu';
import gist from '../Utils';
import github from './github.svg';
import './NavBar.css';


class NavBar extends React.Component {
  state = {
    userName: NMAE,
    userAvatar: AVATAR,
  };

  componentDidMount() {
    gist.getUser().then(({ data }) => {
      console.log(data);
      const { avatar_url: userAvatar, public_gists: publicGists, login: userName } = data;
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
            <NavLink className="nav-link" to="/readme">
              About
            </NavLink>
          </div>
          <Menu render={userAvatar && <img className="avatar" src={userAvatar} alt="avatat" />}>
            <NavLink className="nav-menu-item" to="/setting"><Menu.Item>Setting</Menu.Item></NavLink>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default NavBar;
