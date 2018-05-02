import React, { Component } from 'react';
import '../css/navBar.css';

class NavBar extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset > window.innerHeight + 40) this.props.addClass("sticky"); 
    if (window.pageYOffset < window.innerHeight - 10) this.props.removeClass("sticky"); 
  }

  render() {
    return (

        <ul className={`nav-flex ${this.props.sticky ? "sticky" : ""}`}  ref={(el) => {this.navBar = el}} >
          <li><a className="nav-links" href="#home">home</a></li>
          <li><a className="nav-links" href="#about">about</a></li>
          <li><a className="nav-links" href="#portfolio">portfolio</a></li>
          <li><a className="nav-links" href="#contact">contact</a></li>
        </ul>

    )
  }
}
export default NavBar;