import React from 'react';

const App = React.createContext({
  gist: null,
  setGist: () => {
  },
  gists: [],
});

export default App;
