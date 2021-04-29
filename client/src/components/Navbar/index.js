import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="blue1">

      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/projects" className="link">
        Projects
      </Link>
      <Link to="/hobbies" className="link">
        Hobbies
      </Link>
      <Link to="/history" className="link">
        History
      </Link>
      <Link to="/contact" className="link">
        Contact me
      </Link>

      {/* <a href="https://github.com/MorgansPlayGames" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/parker-morgan-18ab5b1b4" target="_blank">Linkedin</a> */}
    </nav>
  );
}

export default Navbar;
