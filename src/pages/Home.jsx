import "../App.css";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="app-main">
        <h1 className="app-title">TaskMaster - ניהול משימות חכם</h1>
      </main> 
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
    </>
  );
}

export default Home;
