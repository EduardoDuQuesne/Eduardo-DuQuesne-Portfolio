import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import "../css/text-field.css";

const TextFieldExampleSimple = () => (
  <div>
    <MuiThemeProvider>
      <div className="input-flex">
        <TextField
          className="input-flex-item"
          name="name"
          hintText=""
          floatingLabelText="Name"
        />
        <br />
        <TextField
          className="input-flex-item"
          name="email"
          hintText=""
          floatingLabelText="Email"
        />
        <TextField
          className="input-flex-item"
          name="message"
          hintText=""
          floatingLabelText="Message"
          multiLine={true}
          rows={2}
        />
      </div>
    </MuiThemeProvider>
  </div>
);

export default TextFieldExampleSimple;
