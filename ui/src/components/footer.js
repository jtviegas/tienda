import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectSessionError } from '../features/session/sessionSlice';
import { get } from '../services/i18n';


function Footer() {
  const sessionError = useSelector(selectSessionError);
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>
      <div className="col-md-8 d-flex align-items-center">
        { sessionError && (<span className="mb-3 mb-md-0 text-body-secondary"> {sessionError} </span>) }
      </div>
    </footer>
  );
}

export default Footer;