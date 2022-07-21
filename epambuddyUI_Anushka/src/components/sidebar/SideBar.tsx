import { NavLink } from "react-router-dom";
import "./SideBar.css";
export default () => {
  return <div className="side-bar">
    <div className="side-items"><NavLink to="/">MANAGER</NavLink></div>
    <div className="side-items"><NavLink to="/">EMPLOYE</NavLink></div>
    <div className="side-items"><NavLink to="/">HRBP</NavLink></div>
    <div className="side-items"><NavLink to="/">RD</NavLink></div>
    <div className="side-items"><NavLink to="/">ADMIN</NavLink></div>
    <div className="side-items"><NavLink to="/">ANYWHERE</NavLink></div>
    <div className="side-items"><NavLink to="/">PRACTICES</NavLink></div>
  
  </div>;
};