import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about" className="about"> 
        <h1>About</h1>
        <img src={require("../img/serious_pic.jpg")} />
        <h3>Who am I?</h3>
        <p>With a passion for technology and problem solving, I am a software developer who is always hungry to improve and learn. I love being part of a team that strives to work towards a greater goal and find comfort in knowing that i have an endless amount to learn from fellow team members.</p>
      </div>
    )
  }
}
export default About;