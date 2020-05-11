import React from 'react';
import './App.scss';

import { useRoutes } from 'hookrouter'
import Routes from './routes/routes'

import Header from './navigation/header/header'

function App() {
  const routeResult = useRoutes(Routes)

  return (
    <>
      <Header />
      {routeResult}
    </>
  )
}

export default App;
