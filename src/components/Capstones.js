import React, { Component } from "react";

class Capstones extends Component {
  render() {
    return (
      <div>
          <h3 className="capstone-title">
            <span className="submenu-title">{"< "}</span>
              {this.props.name.toUpperCase()}
            <span className="submenu-title">{" >"}</span>
          </h3>
          <a href={this.props.link}>
            <img
              src={`${this.props.image}`}
              alt={this.props.name}
            />
          </a>
          <p>
            {this.props.desc}
          </p>
        </div>
    );
  }
}
export default Capstones;