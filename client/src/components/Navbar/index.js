import react from "react"
import { Link } from "react-router-dom"

function Navbar(){
return (
    <>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/hobbies">Hobby Page</Link>
      <Link to="/history">History</Link>
      <Link to="/contact">Contact Page</Link>
      <a href="https://github.com/MorgansPlayGames" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/parker-morgan-18ab5b1b4" target="_blank">Linkedin</a>
    </>
  );
}

export default Navbar;