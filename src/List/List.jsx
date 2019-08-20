import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Button from '../Button';

const List = (props) => {
  const { data, onChnage, page } = props;
  return (
    <div>
      <h4>Blog List</h4>
      <hr />
      {data.map((gist) => (
        <Item key={gist.url} gist={gist} />
      ))}
      <Button disabled={page <= 1} onClick={() => onChnage(page - 1)}>Prev</Button>
      <Button disabled={data.length <= 0} onClick={() => onChnage(page + 1)}>Next</Button>
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  onChnage: PropTypes.func.isRequired,
};

export default List;
