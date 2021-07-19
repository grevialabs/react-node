import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

// import Manatee from '../Manatee/Manatee';

import Home from '../Home/Home';
import Member from '../Member/Member';
import About from '../About/About';
import Product from '../Product/Product';

function App() {
  return (
    <div className="wrapper">
      <h1>Mantap nih menu sekarang</h1>
      <BrowserRouter>
      <nav>
          <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/member'>Member</Link></li>
              <li><Link to='/member/admin'>Member Admin</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/product'>Product</Link></li>
          </ul>
      </nav>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route exact path="/member">
                <Member />
            </Route>
            <Route path="/member/:type">
                <Member />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/product">
                <Product />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;