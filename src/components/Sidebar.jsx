import { NavLink } from "react-router-dom";
import "./SideBar.css";
import logo from "../assets/logo.png";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-title">
        <img src={logo} alt="Logo" className="logo" />
        <h2>999 VAULT</h2>
      </div>
      <nav style={{ marginTop: '1rem' }}>
        <NavLink to="/" >Your Library</NavLink>
        <NavLink to="/now-playing" >Now Playing</NavLink>
      </nav>
    </aside>
  );
}