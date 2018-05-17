import React, { Component } from "react";
import SvgBorder from './SvgBorder'
import TextFieldInput from "./TextField";
import "../css/contact.css";


class Contact extends Component {
  submitButton = React.createRef();
  handleClick = () => {
    this.submitButton.click();
  }

  render() {
    return (
      <div id="contact" className="contact">

        <SvgBorder />

        <h1 className="wow pulse contact-header">
          <span className="contact-line">CONTACT</span>
        </h1>
        <p className="contact-note">Please feel free to contact me!</p>

      <form action="https://formspree.io/eduquesne@gmail.com" className="wow fadeIn form-flex" method="POST">
          <TextFieldInput />
          <p className="submit-button" onClick={this.handleClick}>SUBMIT</p>
          <button type="submit" ref={(el) => {this.submitButton = el}}></button>
      </form>  


      </div>
    );
  }
}
export default Contact;
