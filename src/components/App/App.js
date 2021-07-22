import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

// import 

// import Manatee from '../Manatee/Manatee';

import Home from '../Home/Home';
import Member from '../Member/Member';
import DisplayMember from '../Member/DisplayMember';
import About from '../About/About';
import Product from '../Product/Product';
import CreateProduct from '../Product/CreateProduct';

function App() {
  return (
    <div className="wrapper">
      <header>

      </header>

      <h1>Header Menu here</h1>
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-light bg-default">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/home'>Home</Link>
            </li>
            <li className="nav-item"><Link to='/member'>Member</Link></li>
            <li className="nav-item"><Link to='/member/admin'>Member Admin</Link></li>
            <li className="nav-item"><Link to='/product'>Product</Link></li>
            <li className="nav-item"><Link to='/product/create'>Product Create</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
          </ul>
        </nav >

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/member">
            <DisplayMember />
          </Route>
          <Route path="/member/:type">
            <Member />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/product/create">
            <CreateProduct />
          </Route>
        </Switch>
      </BrowserRouter >
    </div >
  );
}

export default App;