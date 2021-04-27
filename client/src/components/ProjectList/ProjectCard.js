function ProjectCard(props) {
  function handleClick() {
    props.setModalDisplay({
      type: "show",
      projectNumber: props.project.id,
    });
    console.log("set modal");
  }
  return (
    <div className="projectCard">
      <p>Title: {props.project.name}</p>
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
