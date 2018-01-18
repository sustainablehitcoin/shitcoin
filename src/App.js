import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Navbar.jsx";
import Banner from './Banner.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default App;
