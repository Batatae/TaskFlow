import "./Sidebar.css"
import { Link } from "react-router-dom";
import * as icons from "./../../assets/icons"

function Sidebar() {
  return (
    <>
    <div className="sidebar">  
      <nav>
        <ul>
          <li>
            <Link to="/projects">Projects<img src={icons.projects} alt="Projects" /></Link>
          </li>
          <li>
            <Link to="/tasklist">Tasks<img src={icons.tasks} alt="Tasks" /></Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard<img src={icons.dashboard} alt="Dashboard" /></Link>
          </li>
          <li>
            <Link to="/settings">Settings<img src={icons.settings} alt="Settings" /></Link>
          </li>
        </ul>
      </nav>
      {/*<a href="#" className="login-link">log in/out</a>*/}
    </div>
    </>
  )
}

export default Sidebar;