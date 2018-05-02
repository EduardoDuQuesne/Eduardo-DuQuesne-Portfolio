import React, { Component } from "react";

class IndividualGraph extends Component {
  render() {
    return (
      <div>
        <div className="bar-flex">
          <p className="flex-item-one">Javascript</p>
          <p className="flex-item-two bar-one"> </p>
          <p className="flex-item-three">80%</p>
        </div>
        <div className="bar-flex">
          <p className="flex-item-one">CSS</p>
          <p className="flex-item-two bar-two"> </p>
          <p className="flex-item-three">70%</p>
        </div>
        <div className="bar-flex">
          <p className="flex-item-one">NodeJS</p>
          <p className="flex-item-two bar-three"> </p>
          <p className="flex-item-three">70%</p>
        </div>
        <div className="bar-flex">
          <p className="flex-item-one">React</p>
          <p className="flex-item-two bar-four"> </p>
          <p className="flex-item-three">60%</p>
        </div>
        <div className="bar-flex">
          <p className="flex-item-one">AngularJS</p>
          <p className="flex-item-two bar-five"> </p>
          <p className="flex-item-three">55%</p>
        </div>
        <div className="bar-flex">
          <p className="flex-item-one">SQL</p>
          <p className="flex-item-two bar-six"> </p>
          <p className="flex-item-three">60%</p>
        </div>
      </div>
    );
  }
}
export default IndividualGraph;
