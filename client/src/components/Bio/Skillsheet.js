import React, { useState } from "react";
import skills from "./skills.json"

function getSkills(){
    return skills;
}

function Skillsheet() {
    function skillDisplayInit(){
        let skills= getSkills();
        let skillList = skills.front.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        let backSkillList= skills.back.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        skillList.push(backSkillList);
        return skillList;
    }
    function skillDisplay(){
        let skills= getSkills();
        let skillList = skills.front.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        let backSkillList= skills.back.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        skillList.push(backSkillList);
        setSkillList(skillList);
    }
    function getFront(){
        let skills= getSkills();
        let skillList = skills.front.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        setSkillList(skillList);
    }
    const getBack = ()=>{
        let skills= getSkills();
        let skillList = skills.back.map((x, i) =>{return <p>{x.name} {x.like}</p>})
        setSkillList(skillList);
    }
    const [skillsList, setSkillList] = useState(skillDisplayInit());
    
    
    return <section>
        <button onClick={skillDisplay}>All skills</button>
        <button onClick={getFront}>Display front end skills</button>
        <button onClick={getBack}>Display back end skills</button>
        {skillsList}
    </section>
}

export default Skillsheet