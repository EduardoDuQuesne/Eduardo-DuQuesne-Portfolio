import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (

      <div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <div>
          <h2>Terrible Techno</h2>
          <a href="https://terrible-techno.firebaseapp.com/"><img src={require("../img/terrible_techno.png")} alt="Terrible Techno"/></a>
          <p>An interactive music sequencer with multiple instruments built on ToneJS, Javscript, and jQuery. CRUD and authorization capabilities using Firebase. User has ability to create a musical composition with chord changes and the play along with a live synthesizer. </p>
        </div>
        <div>
          <h2>BackEnd Capstone</h2>
          <a href="https://terrible-techno.firebaseapp.com/"><img src={require("../img/terrible_techno.png")} alt="Terrible Techno"/></a>
          <p>An interactive music sequencer with multiple instruments built on ToneJS, Javscript, and jQuery. CRUD and authorization capabilities using Firebase. User has ability to create a musical composition with chord changes and the play along with a live synthesizer. </p>
        </div>
    </div>

    )
  }
}
export default Portfolio;