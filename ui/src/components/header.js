import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectSessionValue } from '../features/session/sessionSlice';
import {get} from '../services/i18n';


function Header() {
  const sessionValue = useSelector(selectSessionValue);
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav col-6 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><Link className="nav-link px-2 link-secondary" to="/">Home</Link></li>
      </ul>
      { 
        // sessionValue ?  
        // <span className="nav col-6 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">{sessionValue}</span> : 
        <ul className="nav col-6 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link className="nav-link px-2 link-secondary" to="login">Login</Link></li>
          <li><Link className="nav-link px-2 link-secondary" to="signup">SignUp</Link></li>
        </ul>
      }
      
    </header>
  );
}

export default Header;

