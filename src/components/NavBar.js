import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <a href="#home"><li>home</li></a>
          <a href="#about"><li>about</li></a>
          <a href="#portfolio"><li>portfolio</li></a>
          <a href="#contact"><li>contact</li></a>
        </ul>
      </div>
    )
  }
}
export default NavBar;