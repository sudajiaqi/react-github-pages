import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../index';
import PageButton from '../PageButton';

window.scrollTo = jest.fn();

describe('Pagination', () => {
  const onClick = jest.fn();

  test('should display all pages when totalPages <=5', () => {
    const wrapper = shallow(<Pagination onClick={onClick} page={1} totalPages={5} />);
    expect(wrapper.find(PageButton))
      .toHaveLength(5);
  });

  test('should display all pages when totalPages =7 and currentPage = 4', () => {
    const wrapper = shallow(<Pagination onClick={onClick} page={4} totalPages={7} />);
    expect(wrapper.find(PageButton))
      .toHaveLength(7);
  });

  test('should display 4 pages when totalPages =7 and currentPage = 7', () => {
    const wrapper = shallow(<Pagination onClick={onClick} page={7} totalPages={7} />);
    expect(wrapper.find(PageButton))
      .toHaveLength(4);
  });

  test(
    'should display 7 pages when totalPages >7 and currentPage >=4 and totalPages-currentPage <=3',
    () => {
      const wrapper = shallow(<Pagination onClick={onClick} page={7} totalPages={45} />);
      expect(wrapper.find(PageButton))
        .toHaveLength(7);
    },
  );

  describe('when click page button 1', () => {
    test('should invoke function: onClick', () => {
      const wrapper = shallow(<Pagination onClick={onClick} page={7} totalPages={45} />);
      wrapper.find(PageButton)
        .first()
        .simulate('click', { target: { innerHTML: '1' } });
      expect(onClick)
        .toHaveBeenCalled();
    });

    test('should display 4 page button', () => {
      const wrapper = shallow(<Pagination onClick={onClick} page={7} totalPages={45} />);
      wrapper.find(PageButton)
        .first()
        .simulate('click', { target: { innerHTML: '1' } });
      expect(wrapper.find(PageButton))
        .toHaveLength(4);
    });
  });
});
