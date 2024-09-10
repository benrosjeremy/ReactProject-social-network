

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Posts from "./Posts";

const Home = () => (
  <div className="container">
    <header>
      <h1>Welcome to the Home Page</h1>
    </header>
    <nav>
      <Link to="/posts">Posts</Link>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;


