import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <aside style={{
      width: '260px',
      background: '#171a21', 
      color: 'white', 
      padding: '1rem',
      flexShrink: 0
    }}>
      <h2>Medea</h2>
      <nav style={{ marginTop: '1rem' }}>
        <NavLink to="/" style={{ display: 'block', margin: '8px 0', color: 'white' }}>Your Library</NavLink>
        <NavLink to="/now-playing" style={{ display: 'block', margin: '8px 0', color: 'white' }}>Now Playing</NavLink>
      </nav>
    </aside>
  );
}