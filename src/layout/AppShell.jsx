import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PlayerBar from "../components/PlayerBar";

export default function AppShell() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden' // Prevent the entire layout from scrolling
    }}>
      {/* Top section with sidebar and main content */}
      <div style={{
        display: 'flex',
        flex: '1', // Takes up remaining space
        minHeight: 0, // Allows shrinking if needed
        overflow: 'hidden' // Prevent this container from scrolling
      }}>
        {/* Left Sidebar - Fixed */}
        <div style={{
          flexShrink: 0, // Prevent sidebar from shrinking
          overflow: 'hidden' // Keep sidebar content contained
        }}>
          <Sidebar />
        </div>
        
        {/* Main Content Area - Scrollable */}
        <main style={{
          flex: '1', // Takes up remaining horizontal space
          background: '#0f1115',
          color: 'white',
          padding: '1rem',
          overflow: 'auto', // Allow only main content to scroll
          minHeight: 0 // Important for flex child to be scrollable
        }}>
          <Outlet />
        </main>
      </div>
      
      {/* Player bar at bottom - Fixed */}
      <PlayerBar />
    </div>
  );
}