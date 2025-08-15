import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppShell from './layout/AppShell.jsx';
import Library from './pages/Library/Library.jsx';
import NowPlaying from './pages/NowPlaying/NowPlaying.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppShell />,
    children: [
      { index: true, element: <Library /> },
      { path: "now-playing", element: <NowPlaying /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  