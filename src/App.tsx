import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";
import About from "./pages/about";
import Podcast from "./pages/podcast";
import Programs from "./pages/programs";
import Publications from "./pages/publications";
import Run from "./pages/run";
import "./App.css";

const AppContent: React.FC = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/run';
  const isRunPage = location.pathname === '/run';

  return (
    <div className="App">
      <Header />
      <main className={`main-content ${isRunPage ? 'no-padding' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/run" element={<Run />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/shield-web-app">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};


export default App;
