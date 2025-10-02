// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";
import About from "./pages/about";
import Podcast from "./pages/podcast";
import Programs from "./pages/programs";
import Donate from "./pages/donate";
import BlogPostPage from "./pages/blogpost"; // Import your BlogPost component

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/programs" element={<Programs />} />
            
            {/* Blog post route - ADD THIS LINE */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            <Route path="/donate" element={<Donate />} />
            
            <Route
              path="/report"
              element={<PlaceholderPage title="Reports" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Temporary placeholder component for unfinished pages
type PlaceholderPageProps = {
  title: string;
};

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          color: "#063762",
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "#4a5568",
          fontSize: "1.2rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        This page is coming soon. We're working hard to bring you this content!
      </p>
    </div>
  );
};

export default App;