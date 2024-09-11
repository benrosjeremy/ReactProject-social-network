

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Posts from "./Posts";
import Albums from "./Albums";
import TaskDisplay from './pages/ToDo/TaskDisplay';

const Home = () => (
  <div className="container">
    <header>
      <h1>Welcome to the Home Page</h1>
    </header>
    <nav>
      <Link to="/posts">Posts</Link>
      <Link to="/to-do">to-do</Link>
      <Link to="/albums">Albums</Link>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/to-do" element={<TaskDisplay />} />
        <Route path="/albums" element={<Albums />} />

      </Routes>
    </Router>
  );
}

export default App;


