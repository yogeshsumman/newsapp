import React, { Component } from 'react';
import './Style.css';
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';

export class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { darkMode, toggleDarkMode } = this.context;

    return (
      <nav className={`custom-navbar navbar navbar-expand-lg ${darkMode ? 'dark-mode' : 'light-mode'} sticky-top`}>
        <div className="container-fluid">
          <a className="navbar-brand custom-text" href="/">QuickBits</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link custom-text" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/About">About</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link custom-text" to="/technology">Technology</Link></li>
            </ul>
            <div className="d-flex align-items-center">
              <form className="d-flex me-2" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className={`btn btn-outline-${darkMode ? 'light' : 'dark'}`} type="submit">Search</button>
              </form>
              <button 
                className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} ms-2`}
                onClick={toggleDarkMode}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;