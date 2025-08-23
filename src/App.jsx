import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from "./layout/AppShell";
import CardTest from "./pages/CardTest"; // We'll create this

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/test-card" element={<CardTest />} />
      </Routes>
    </BrowserRouter>
  );
}