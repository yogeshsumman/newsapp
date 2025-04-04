import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from './context/ThemeContext';

export default class App extends Component {
  state = {
    darkMode: false
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }), () => {
      // Add or remove dark class from body
      document.body.classList.toggle('dark-mode', this.state.darkMode);
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={{
        darkMode: this.state.darkMode,
        toggleDarkMode: this.toggleDarkMode
      }}>
        <div className={`app ${this.state.darkMode ? 'dark-mode' : ''}`}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News key="sports" pagesize={24} category={"sports"}/>}/>
            <Route exact path="/business" element={<News key="business" pagesize={24} category={"business"}/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={24} category={"entertainment"}/>}/>
            <Route exact path="/general" element={<News key="general" pagesize={24} category={"general"}/>}/>
            <Route exact path="/health" element={<News key="health" pagesize={24} category={"health"}/>}/>
            <Route exact path="/science" element={<News key="science" pagesize={24} category={"science"}/>}/>
            <Route exact path="/sports" element={<News key="sports" pagesize={24} category={"sports"}/>}/>
            <Route exact path="/technology" element={<News key="technology" pagesize={24} category={"technology"}/>}/>
          </Routes>
        </div>
      </ThemeContext.Provider>
    )
  }
}