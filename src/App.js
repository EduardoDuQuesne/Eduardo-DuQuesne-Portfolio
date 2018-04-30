import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import BarGraph from './components/BarGraph';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <About />
        <BarGraph />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;