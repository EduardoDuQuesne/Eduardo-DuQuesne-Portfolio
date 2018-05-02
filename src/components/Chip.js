import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Chips extends Component {
  render() {
    
    return (
      <MuiThemeProvider>
        <Chip className="wow fadeIn">
            <Avatar src={`${this.props.image}`} />
            {this.props.skill}
        </Chip>

      </MuiThemeProvider>
    )
  }
}
export default Chips;