import React, { Component } from "react";
import Chips from "./Chip";
import "../css/chip-container.css";

class ChipContainer extends Component {
  render() {
    const [...skillsArray] = this.props.skills;
    return (
      <div>
        <h3 className="skills-subheading">
          <span className="submenu-title">{"< "}</span>
          SKILLS
          <span className="submenu-title">{" >"}</span>
        </h3>

        <div className="chip-container">
          {skillsArray.map((skill, i) => (
            <div key={skill.name} className="chips">
              <Chips image={skill.image} skill={skill.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ChipContainer;
