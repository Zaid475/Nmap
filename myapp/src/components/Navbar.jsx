import React from 'react'
import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const path=useNavigate()

    function value(){
        path("/toprated")

    }
    function value2(){
        path("/")

    }
    function value3(){
        path("/upcoming")

    }
    
  return (
    <div>
        <div className="navbar">
        <div className="logo">MovieDb</div>
        <div onClick={value2} className="nav-link">Popular</div>
        <div onClick={value} className="nav-link">Top Rated</div>
        <div onClick={value3} className="nav-link">Upcoming</div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Movie Name"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
