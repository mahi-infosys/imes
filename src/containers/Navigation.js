import React from 'react';
import { Link } from "react-router-dom";  

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light px-4">
      &nbsp;
      <Link className="nav-link" to="/">
        <span className='navbar-brand-logo'>IMES</span>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/data-analytics">Data Analytics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;