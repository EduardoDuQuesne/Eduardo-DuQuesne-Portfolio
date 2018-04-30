import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (

      <div id="contact" className="contact">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea type="text" name="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>

    )
  }
}
export default Contact;