import React, { Component } from 'react';
import { WOW } from 'wowjs/dist/wow';
import Canvas from './components/Canvas';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    skills: [ 
      {"name": "Javascript", "image": require("./img/icons/javascript.png")},
      {"name": "NodeJS", "image": require("./img/icons/nodejs.png")},
      {"name": "React", "image": require("./img/icons/reactjs.jpg")},
      {"name": "AngularJS", "image": require("./img/icons/angularjs.png")},
      {"name": "ToneJS", "image": require("./img/icons/tonejs.png")},
      {"name": "SQL", "image": require("./img/icons/sql.png")},
      {"name": "Postgres", "image": require("./img/icons/postgres.jpg")},
      {"name": "SASS", "image": require("./img/icons/sass.png")},
      {"name": "CSS", "image": require("./img/icons/css.png")}
    ],
    width: "",
    height: "",
    "sticky": false,
    capstones: [
      {"name": "Terrible-Techno", 
      "image": require("./img/terrible_techno.png"), 
      "link": "https://terrible-techno.firebaseapp.com/",
      "desc": `An interactive music sequencer with multiple instruments built onToneJS, Javscript, and jQuery. CRUD and authorization capabilities using Firebase. User has abilitycreate a musical composition with chord changes and the play along with a live synthesizer.` },
      {"name": "Back-End Capstone", 
      "image": require("./img/terrible_techno.png"), 
      "link": "https://terrible-techno.firebaseapp.com/",
      "desc": `An interactive music sequencer with multiple instruments built onToneJS, Javscript, and jQuery. CRUD and authorization capabilities using Firebase. User has abilitycreate a musical composition with chord changes and the play along with a live synthesizer.` }
    ]
  }
  
  componentDidMount = () => {
    new WOW({
      live: false
      }).init();
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({width: width, height: height});
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  updateDimensions = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this.setState({width: width, height: height});
  }

  updateCanvas = (ctx)  => {
    console.log('CONTEXT: ', ctx );
  }

  addClass = (className) => {
    if (className === "sticky") this.setState({"sticky": true});
  }
  removeClass = (className) => {
    if (className === "sticky") this.setState({"sticky": false});
  }

  
  render() {
    return (
      <div>
        <Canvas width={this.state.width} height={this.state.height} updateCanvas={this.updateCanvas}  />
        <Header />
        <NavBar addClass={this.addClass} removeClass={this.removeClass} sticky={this.state.sticky} />
        <About skills={this.state.skills} />
        
        <Portfolio capstones={this.state.capstones} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;