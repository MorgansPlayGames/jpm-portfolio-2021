import projectList from "../../lib/projectList";

function ProjectModal(props) {
  function exitModal() {
    props.setModalDisplay({
      type: "hidden",
      projectNumber: 0,
    });
  }

  function liveSite() {
    if (project.livesite) return <a href={project.livesite}>Live Website!</a>;
  }

  function techList(){
    let list = project.technologies.map((tech, i) =>{
      return <span key={i}>{tech} </span>
    })
    return list;
  }

  let projectNumber = props.modal.projectNumber;
  let project = projectList[projectNumber];

  return (
    <section id="modal" className={props.modal.type}>
      <button onClick={exitModal}>Close</button>
      <p>Project: {project.name}</p>
      <p>Description: {project.description}</p>
      <a href={project.gitlink}>GitHubLink</a>
      {liveSite()}
      <p>Technology List: {techList()}</p>
      <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
      <div>
      <button onClick={exitModal}>Close</button>
      </div>
  </section>
  );
}

export default ProjectModal;
