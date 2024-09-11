import '../App.css';

import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the Home Page</h1>
      </header>
      <nav>
        <Link to="/posts">Posts</Link>
        <Link to="/to-do">to-do</Link>
      </nav>
    </div>
  )
}

export default Home
