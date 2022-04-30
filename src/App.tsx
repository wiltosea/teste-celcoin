import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Pacientes = lazy(() => import('./Pages/Pacientes'));

const App = () => (
  <>
  <div>
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/pacientes">pacientes</a></li>
    </ul>
  </div>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </Suspense>
  </Router>
  </>
);

export default App;