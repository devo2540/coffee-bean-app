import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Home from './Home'
import Header from './navigation/header/header'
import BeanBagForm from './forms/beanBagForm'
import BrewForm from './forms/brewForm'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beanBagForm" component={BeanBagForm} />
        <Route path="/brewForm" component={BrewForm} />
      </Switch>
    </Router>
  );
}

export default App;
