import navbrand from "./Assist Logo.png";
import icon from "./Icon.svg";
import SearchBar from "../searchbar/SearchBar";
import "./NavBar.css";
import {Link} from "react-router-dom";
export default () => {
    return <nav className="nav-bar">
      <div className="container">
        <Link className="nav-brand" to="/" ><img src={navbrand} alt="navbrand"/></Link>
        <SearchBar />
        <a className="profile"><div><img src={icon} alt="icon"/></div></a>
      </div>
    </nav>
  }