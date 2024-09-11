

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from "./pages/Posts";
import TaskDisplay from './pages/ToDo/TaskDisplay';
import Home from './pages/Home';

const userId = 1;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts userId={userId}/>} />
        <Route path="/to-do" element={<TaskDisplay userId={userId}/>} />
      </Routes>
    </Router>
  );
}

export default App;


