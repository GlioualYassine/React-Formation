import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { useContext } from 'react'
function Nav() {
  const data = useContext(ProductContext)

  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">{data.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <NavLink className={(navData)=>`nav nav-link ${navData.isActive ? "active" : ""}`} to="/">Home ({data.products.length})
                        <span className="visually-hidden">(current)</span>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className={(navData)=>`nav nav-link ${navData.isActive ? "active" : ""}`} to="/contacts">Contacts</NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className={(navData)=>`nav nav-link ${navData.isActive ? 'active' : ""}`} to={"/articles"}>Articles</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className={(navData)=>`nav nav-link ${navData.isActive ? "active" : ""}`} to="/about">About</NavLink>
                    </li>

                </ul>
               
                </div>
      </div>
</nav>
)
}

export default Nav