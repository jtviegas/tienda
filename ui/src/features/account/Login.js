import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { authenticated } from './accountSlice'
import Container from 'react-bootstrap/esm/Container'

export const Login = () => {

  const account = useSelector(state => state.account)
  console.log("window: ", window)
  const dispatch = useDispatch()

  /*
  if (0 == Object.keys(account).length)
    console.log("no account yet")
    // window.location.href = "https://www.google.com/"
  else
  { */ 
    return (
      <Container>
        <fieldset disabled>
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">login/signup</h2>
            <div class="card my-5">

              <form class="card-body cardbody-color p-lg-5">

                <div class="text-center">
                  <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__240.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile"/>
                </div>

                <div class="mb-3">
                  <input type="text" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="email"/>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password" placeholder="password"/>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-color px-5 mb-5 w-45">Login</button>                   <button type="submit" class="btn btn-color px-5 mb-5 w-45">Sign Up</button>
                </div>
                <div id="emailHelp" class="form-text text-center mb-5 text-dark"><a href="#" class="text-dark fw-bold">forgot passsword?</a>
                </div>
              </form>
            </div>

          </div>
        </div>
        </fieldset>
      </Container>
    )
  //}


}