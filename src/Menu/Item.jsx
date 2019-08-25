
import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  handleClick = (e) => {
    e.stopPropagation();
    const { onClick } = this.props;
    onClick(e);
  };

  render() {
    const { className, children } = this.props;
    return (
      <div role="presentation" className={`menu-list-item ${className}`} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

Item.defaultProps = {
  className: '',
  onClick: () => {
  },
};
Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Item;
