import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ProjectDetail defaultProjectId="pizza-shop" />} />
      </Routes>
    </Router>
  );
}
