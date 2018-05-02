import React, { Component } from "react";
import Capstones from './Capstones';
import "../css/portfolio.css";

class Portfolio extends Component {
  render() {
  
    const capstones = [...this.props.capstones];

    return (
      <div id="portfolio" className="portfolio">

        <h1 className="portfolio-header">
          <span className="portfolio-line">PORTFOLIO</span>
        </h1>
        
        <div className="portfolio-flex">
          {capstones.map(({name, image, link, desc}) => 
            <Capstones key={name} name={name} image={image} desc={desc} link={link} />
          )}
        </div>

      </div>
    );
  }
}

export default Portfolio;
