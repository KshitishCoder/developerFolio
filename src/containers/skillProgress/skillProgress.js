import React from "react";
import { proficiencySection } from "../../portfolio";
import "./ProgressBar.scss";

const SkillProgress = () => {
  return (
    <div className="skills-container">
      <h2>{proficiencySection.title}</h2>
      {proficiencySection.skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">{skill.name}</div>
          <div className="meter">
            <span style={{ width: `${skill.percentage}%` }}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillProgress;