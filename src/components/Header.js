import React, { Component } from 'react';
import '../css/header.css';


class Header extends Component {
  render() {
    return (
      <div id="home" className="header">
        <h1 className="main-header"><span className="my-name-is">My name is </span><span className="eduardo">Eduardo DuQuesne.</span></h1>
        <h2 className="subheader">Full-Stack Software Developer.</h2>
      </div>
    )
  }
}
export default Header;