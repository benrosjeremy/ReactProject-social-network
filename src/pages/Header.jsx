import React from 'react'
import { Link, NavLink } from "react-router-dom";

import './Header.css'

function Header() {
  return (
<div className="app-container" dir="rtl">
      <header className="app-header">
        <nav className="app-nav">
        <Link className="app-logo" to="/">TaskMaster</Link>
          <ul className="nav-list">
          <Link className="nav-link" to="/">דף הבית</Link>
          <Link className="nav-link" to="/posts">Posts</Link>
        <Link className="nav-link" to="/to-do">to-do</Link>
        <Link className="nav-link" to="/albums">Albums</Link>
          </ul>
        </nav>
      </header>
      </div> )
}

export default Header