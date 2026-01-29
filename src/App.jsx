import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load Pages
const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
