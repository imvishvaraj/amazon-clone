import React from 'react';
import './App.css';
import Header from './Header';    // importing header from header.js file
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from'./Login';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
      {/* <h1>Hello Clever Programmers, let's bulid the Amazon Store!</h1> */}

      <Switch>
        
        <Route path="/login">
            <Login />
        </Route>
        
        <Route path="/checkout">
            <Header/>
            <Checkout/>
        </Route>

        {/* Note: always keep main route component at bottom else other route will not get hit! */}

        <Route path="/">
            <Header/>
            {/* Adding Home content into main page. */}
            <Home/>
        </Route>

      </Switch>   

    </div>
    </Router>
    
  );
}

export default App;
