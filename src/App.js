import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./Navbar.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
