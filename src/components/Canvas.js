import React, { Component } from 'react';

class Canvas extends Component {
  // componentDidMount = () => {
  //   this.updateCanvas;
  // }




  render() {
    return (
      <canvas width={this.props.width} height={this.props.height}></canvas>
    )
  }
}
export default Canvas;