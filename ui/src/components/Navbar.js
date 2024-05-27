import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {


  return (
    <nav>
      <section>
        <h1>tienda</h1>

        <div className="navContent">
          <div className="navLinks">
            <NavLink to="/">items</NavLink>
            <NavLink to="/account">account</NavLink>
            <NavLink to="/login">login</NavLink>
          </div>

        </div>
      </section>
    </nav>
  )
}
