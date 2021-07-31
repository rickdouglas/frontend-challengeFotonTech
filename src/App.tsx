import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';

function App() {
  return (
    <BrowserRouter>
   
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />

  </BrowserRouter>
  );
}

export default App;
