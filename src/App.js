import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';

import './materialize-src/sass/materialize.scss'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
