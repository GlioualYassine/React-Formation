import React from 'react'
import { NavLink } from 'react-router-dom'
function nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <NavLink activeClassName="active" className="nav nav-link" to="/">Home
                        <span className="visually-hidden">(current)</span>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" className="nav nav-link" to="/contacts">Contacts</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink activeClassName="active" className="nav nav-link" to="/about">About</NavLink>
                    </li>

                </ul>
               
                </div>
      </div>
</nav>
)
}

export default nav