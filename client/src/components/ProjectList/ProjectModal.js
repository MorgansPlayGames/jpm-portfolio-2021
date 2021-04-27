import projectList from "../../lib/projectList"

function ProjectModal(props){
    let projectNumber = props.modal.projectNumber;
    let project = projectList[projectNumber];
    console.log(projectNumber);
    return <section>
        <p>ProjectName: {project.name}</p>
        <p>project description.</p>
        <a>GitHubLink</a>
        <a>LiveSite</a>
        <p>Technology List</p>
        <p>Full Size Image</p>
    </section>
}

export default ProjectModal