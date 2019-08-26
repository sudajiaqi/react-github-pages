import React from 'react';

const Context = React.createContext({
  gist: null,
  setGist: () => {
  },
  gists: 1,
  setGists: () => {
  },
});

const consumer = (Component) => (props) => (
  <Context.Consumer>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {(context) => <Component {...props} context={context} />}
  </Context.Consumer>
);

export { consumer };
export default Context;
