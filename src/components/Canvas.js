import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount = () => {
    const ctx = this.myCanvas.getContext("2d");
    // window.onload = () => {
    //   ctx.beginPath();
    //   ctx.arc(540, 350, 300, 0, Math.PI * 2, false);
    //   ctx.strokeStyle = "#d7443f";
    //   ctx.stroke();
    // }
  };

  render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={el => (this.myCanvas = el)}
      />
    );
  }
}
export default Canvas;
