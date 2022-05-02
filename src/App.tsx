import GlobalStyle from './styles/global';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Aside } from './Components/Aside';
import { Layout } from './Components/PageContainer/Layout';
// import './Global.css';


const Dashboard = lazy(() => import('./Pages/Dashboard/'));
const Pacientes = lazy(() => import('./Pages/Pacientes/'));

const App = () => (
  <>
      <GlobalStyle />
    <main>
      <Layout>
        <Router>
          <Aside />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pacientes" element={<Pacientes />} />
            </Routes>
          </Suspense>
        </Router>
      </Layout>
    </main>
  </>
);

export default App;