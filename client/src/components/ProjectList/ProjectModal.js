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

  let projectNumber = props.modal.projectNumber;
  let project = projectList[projectNumber];

  return (
    <section id="modal" className={props.modal.type}>
      <button onClick={exitModal}>Close</button>
      <p>Project: {project.name}</p>
      <p>Description: {project.description}</p>
      <a href={project.gitlink}>GitHubLink</a>
      {liveSite()}
      <p>Technology List</p>
      <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
      <button onClick={exitModal}>Close</button>
    </section>
  );
}

export default ProjectModal;
