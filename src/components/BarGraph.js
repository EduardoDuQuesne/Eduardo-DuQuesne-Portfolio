import React, { Component } from 'react';
import IndividualGraph from './IndividualGraph';

import '../css/barGraph.css'

class BarGraph extends Component {
  render() {
    return (
      <div class="graph-container">
        <IndividualGraph />
        <IndividualGraph />
        <IndividualGraph />
        <IndividualGraph />
        <IndividualGraph />
        <IndividualGraph />
      </div>

    )
  }
}
export default BarGraph;