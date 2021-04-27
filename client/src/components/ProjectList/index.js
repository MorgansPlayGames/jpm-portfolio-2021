import { useState } from "react";
import projectList from "../../lib/projectList";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./styles.css"

function ProjectList() {
  //filters project list by technology
  function handleClick(event) {
    let tech = event.target.attributes.tech.value;
    let list = [];
    projectList.map((p) => {
      for (let i = 0; i < p.technologies.length; i++) {
        if (tech === p.technologies[i]) {
          list.push(p);
        }
      }
    });
    setProjectsView(list);
  }

  //gets a list of technologies for projects I have used
  function getTechButtons() {
    console.log("getting tech buttons");
    const technologies = [];
    projectList.forEach((p) => {
      p.technologies.map((tech) => {
        let check = false;
        for (let i = 0; i < technologies.length; i++) {
          if (technologies[i] === tech) check = true;
        }
        if (check === false) technologies.push(tech);
      });
    });
    return technologies.map((tech) => {
      return (
        <button onClick={handleClick} tech={tech}>
          {tech}
        </button>
      );
    });
  }
  const [projectsView, setProjectsView] = useState(projectList);
  const [modalDisplay, setModalDisplay] = useState({
      type:"hidden",
      projectNumber:0
  })
  return (
    <>
        <h2>Projects</h2>
        <p>Please select a technology filter!</p>
      {getTechButtons()}
      <ProjectModal modal={modalDisplay}/>
      {projectsView.map((p) => {
        return <ProjectCard project={p} setModalDisplay={setModalDisplay} />;
      })}
    </>
  );
}

export default ProjectList;
