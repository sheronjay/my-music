import { NavLink } from "react-router-dom";
import "./SideBar.css";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Medea</h2>
      <nav style={{ marginTop: '1rem' }}>
        <NavLink to="/" >Your Library</NavLink>
        <NavLink to="/now-playing" >Now Playing</NavLink>
      </nav>
    </aside>
  );
}