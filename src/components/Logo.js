import React from 'react'
import './Logo.css'
import logo from './../logo.png';
import {Link} from 'react-router-dom'


const Logo = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </header>
  )
}

export default Logo;