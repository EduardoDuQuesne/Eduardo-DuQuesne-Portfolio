import React, { Component } from "react";

class SvgBorder extends Component {
  render() {
    return (
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f1ece9" stroke="white" />
      </svg>
    );
  }
}
export default SvgBorder;
