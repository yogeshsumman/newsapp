"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { Sun, Moon } from 'lucide-react' // Add Lucide icons
import "./Style.css"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <nav className={`custom-navbar navbar navbar-expand-lg ${darkMode ? "dark-mode" : "light-mode"} sticky-top`}>
      <div className="container-fluid">
        <a className="navbar-brand custom-text" href="/">
          QuickBits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Your existing nav items */}
          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex me-2" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${darkMode ? "light" : "dark"}`} type="submit">
                Search
              </button>
            </form>
            <button 
              className={`btn ${darkMode ? "btn-light" : "btn-dark"} ms-2 d-flex align-items-center justify-content-center`} 
              style={{ width: '40px', height: '40px', borderRadius: '50%', padding: '0' }}
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar