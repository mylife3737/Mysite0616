/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import UpdatedPolicies from './pages/UpdatedPolicies';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/updated-policies" element={<UpdatedPolicies />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
