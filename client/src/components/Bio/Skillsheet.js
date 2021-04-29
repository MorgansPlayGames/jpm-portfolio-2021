import React, { useState } from "react";
import skills from "./skills.json";

function getSkills() {
  return skills;
}

function Skillsheet() {
  function skillMapper(skills) {
    return skills.map((x, i) => {
      return <span key={i} className="yellow1">{x.name}</span>;
    });
  }
  function skillDisplayInit() {
    let skills = getSkills();
    let skillList = skillMapper(skills.front);
    let backSkillList = skillMapper(skills.back);
    skillList.push(backSkillList);
    return skillList;
  }
  function skillDisplay() {
    let skills = getSkills();
    let skillList = skillMapper(skills.front);
    let backSkillList = skillMapper(skills.back);
    skillList.push(backSkillList);
    setSkillList(skillList);
  }
  function getFront() {
    let skills = getSkills();
    let skillList = skillMapper(skills.front);
    setSkillList(skillList);
  }
  const getBack = () => {
    let skills = getSkills();
    let skillList = skillMapper(skills.back);
    setSkillList(skillList);
  };
  const [skillsList, setSkillList] = useState(skillDisplayInit());

  return (
    <section className="red1" id="skillSheet">
      <p>Click a button for fun!</p>
      <button className="blue1" onClick={skillDisplay}>All skills</button>
      <button className="blue1" onClick={getFront}>Display front end skills</button>
      <button className="blue1" onClick={getBack}>Display back end skills</button>
      <section id="skillList">{skillsList}</section>
    </section>
  );
}

export default Skillsheet;
