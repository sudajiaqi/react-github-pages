/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';


const Authentication = React.createContext({
  visible: false,
  setVisible: () => {
  },
});

const Provider = (props) => {
  const { children, defaultVisible } = props;
  const [visible, setVisible] = React.useState(defaultVisible);
  return (
    <Authentication.Provider value={{ visible, setVisible }}>
      {children}
    </Authentication.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultVisible: PropTypes.bool.isRequired,
};

const visibleHoc = (Component) => (props) => (
  <Authentication.Consumer>
    {({ visible }) => visible && <Component {...props} />}
  </Authentication.Consumer>
);

const consumner = (Component) => (props) => (
  <Authentication.Consumer>
    {(contxt) => <Component {...props} context={contxt} />}
  </Authentication.Consumer>
);


export { Provider, consumner, visibleHoc as visible };
