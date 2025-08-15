import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PlayerBar from "../components/PlayerBar";


export default function AppShell(){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw'
    }}>
      {/* Top section with sidebar and main content */}
      <div style={{
        display: 'flex',
        flex: '1', // Takes up remaining space
        minHeight: 0 // Allows shrinking if needed
      }}>
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main style={{
          flex: '1', // Takes up remaining horizontal space
          background: '#0f1115', 
          color: 'white', 
          padding: '1rem'
        }}>
          <Outlet />
        </main>
      </div>
      
      {/* Player bar at bottom */}
      <PlayerBar />
    </div>
  );
}