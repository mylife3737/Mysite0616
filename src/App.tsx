/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import FixitFirst from './pages/FixitFirst';
import UpdatedPolicies from './pages/UpdatedPolicies';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/fix-it-first" element={<FixitFirst />} />
          <Route path="/fixit-sam" element={<FixitFirst />} />
          <Route path="/updated-policies" element={<UpdatedPolicies />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
