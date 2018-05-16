import React, { Component } from "react";
import ChipContainer from './ChipContainer';
import "../css/about.css";

class About extends Component {
  
  render() {
    return (

      <div id="about" className="about">
        <h1 className="wow fadeInUp about-header">
          <span className="about-line">ABOUT</span>
        </h1>

        <div className="wow about-flex">

          <div className="about-flex-item">
            <img
              className="wow hinge about-photo"
              src={require("../img/fun_pic.jpg")}
              alt="Profile"
            />
          </div>

          <div className="about-flex-item about-flex-two">
            <h3 className="wow fadeIn who-am-i">
              <span className="submenu-title">{"< "}</span>WHO AM I ?
              <span className="submenu-title">{" >"}</span>
            </h3>
            <p className="wow fadeInUp">
              With a passion for technology and problem solving, I am a software
              developer who is always hungry to improve and learn. I love being
              part of a team that strives to work towards a greater goal and
              find comfort in knowing that i have an endless amount to learn
              from fellow team members.
            </p>
            <ChipContainer skills={this.props.skills}/>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
