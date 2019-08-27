import React from 'react';
import PropTypes from 'prop-types';
import PageButton from './PageButton';
import './Pagination.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    const { page } = this.props;
    this.state = {
      prevProps: page,
      current: page,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { page } = nextProps;

    if (page !== prevState.prevProps) {
      return {
        prevProps: page,
        current: page,
      };
    }
    return prevState;
  }

  handleClick = (event) => {
    const pageNumber = parseInt(event.target.innerHTML, 10);
    const { onClick, scroll } = this.props;
    const { current } = this.state;
    if (current !== pageNumber) {
      onClick(pageNumber);
      this.setState({
        current: pageNumber,
      });
      if (scroll) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  pageRange = (start, end) => {
    const { current } = this.state;
    return [...Array(end - start + 1)
      .keys()].map((key) => {
      const page = key + start;
      return <PageButton key={page} onClick={this.handleClick} page={page} current={current} />;
    });
  };

  render() {
    const { className } = this.props;
    let { total } = this.props;
    const { current } = this.state;
    total = Math.max(total, current);

    if (total <= 1) {
      return null;
    }

    let pages = [];
    if (total <= 5 || (current <= 4 && total - current <= 3)) {
      pages = this.pageRange(1, total);
    } else if (current <= 4) {
      pages = this.pageRange(1, current + 2);
      pages.push(<PageButton.Dot key="dot2" />);
      pages.push(<PageButton key={total} onClick={this.handleClick} page={total} />);
    } else if (total - current <= 3) {
      pages.push(<PageButton key={1} onClick={this.handleClick} page={1} />);
      pages.push(<PageButton.Dot key="dot1" />);
      pages.push(this.pageRange(current - 2, total));
    } else {
      pages.push(<PageButton key={1} onClick={this.handleClick} page={1} />);
      pages.push(<PageButton.Dot key="dot1" />);
      pages.push(this.pageRange(current - 2, current + 2));
      pages.push(<PageButton.Dot key="dot2" />);
      pages.push(<PageButton key={total} onClick={this.handleClick} page={total} />);
    }

    return (
      <div className={`paging ${className}`}>
        {pages}
      </div>
    );
  }
}

Pagination.defaultProps = {
  className: '',
  scroll: true,
};

Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  scroll: PropTypes.bool,
};

export default Pagination;
