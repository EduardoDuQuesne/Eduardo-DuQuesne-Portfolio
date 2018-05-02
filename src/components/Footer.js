import React, { Component } from 'react';
import '../css/footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="#top">
          <img className="back-to-top" src={require("../img/icons/top-of-page.png")} alt="back to top" />
        </a>
      </div>
    );
  }
}

export default Footer;