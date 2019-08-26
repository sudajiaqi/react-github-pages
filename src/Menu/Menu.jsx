import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from '../OutsideClickHandler';
import './Menu.css';

class Menu extends React.Component {
  state = {
    visible: false,
  };

  openModal = (e) => {
    e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  closeModal = (e) => {
    e.stopPropagation();
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    const { children, render } = this.props;
    return (
      <div className="my-menu">
        {!visible && (
          <div role="presentation" className="menu-header" onClick={this.openModal}>
            {render}
            <span className="dropdown-caret" />
          </div>
        )}
        {visible && (
          <>
            <div role="presentation" className="menu-header" onClick={this.closeModal}>
              {render}
              <span className="dropdown-caret" />
            </div>
            <OutsideClickHandler onOutsideClick={this.closeModal}>
              <div className="menu-item-container">
                {children}
              </div>
            </OutsideClickHandler>
          </>
        )}
      </div>
    );
  }
}

Menu.defaultProps = {
  render: null,
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  render: PropTypes.node,
};

export default Menu;
