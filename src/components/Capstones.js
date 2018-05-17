import React, { Component } from "react";

class Capstones extends Component {
  render() {
    return (
      <div>
          <h3 className="wow fadeInUp capstone-title">
            <span className="submenu-title">{"< "}</span>
              {this.props.name.toUpperCase()}
            <span className="submenu-title">{" >"}</span>
          </h3>
          <a href={this.props.link}>
            <img
            className="wow fadeIn"
              src={`${this.props.image}`}
              alt={this.props.name}
            />
          </a>
          <p className="wow fadeIn">
            {this.props.desc}
          </p>
        </div>
    );
  }
}
export default Capstones;