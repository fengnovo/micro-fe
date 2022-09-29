import React  from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>这是react项目</p>
        <ul>
        <li>
          <Link to="/home">主页</Link>
        </li>
        <li>
          <Link to="/list">列表页</Link>
        </li>
        <li>
          <Link to="/detail/123">详情页</Link>
        </li>
      </ul>
      <Outlet />
      </header>
    </div>
  );
}

export default App;
