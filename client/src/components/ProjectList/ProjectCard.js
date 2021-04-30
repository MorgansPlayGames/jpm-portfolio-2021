function ProjectCard(props) {
  function handleClick() {
    props.setModalDisplay({
      type: "show",
      projectNumber: props.project.id,
    });
  }
  return (
    <div className="projectCard">
      <p className="title">Title: {props.project.name}</p>
      <img
        src={process.env.PUBLIC_URL + props.project.image}
        alt={props.project.name}
      />
      <div>
        <button onClick={handleClick}>View Project Details</button>
      </div>
    </div>
  );
}

export default ProjectCard;
