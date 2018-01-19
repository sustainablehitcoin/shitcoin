import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Navbar.jsx";
import Banner from './Banner.jsx'
import Footer from './Footer.jsx'
import ICOCard from './ICOCard.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <ICOCard />
        <Footer />
      </div>
    );
  }
}

export default App;
