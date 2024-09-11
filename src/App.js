

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from "./pages/Posts";
import TaskDisplay from './pages/ToDo/TaskDisplay';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Header from './pages/Header';

const userId = 1;

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home userId={userId}/>} />
        <Route path="/posts" element={<Posts userId={userId}/>} />
        <Route path="/to-do" element={<TaskDisplay userId={userId}/>} />
        <Route path="/albums" element={<Albums userId={userId}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


