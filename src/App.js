import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Routes from './Routes/Routes';



function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Admin Area</Link>
          </li>
        </ul>
      </nav>
      <Routes/>
    </div>
  );
}

export default App;
