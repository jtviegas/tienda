// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signIn, signUp } from "./authService"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(false)
  const [verificationcode, setVerificationcode] = useState("")
  
  const navigate = useNavigate()

  const handleSignIn = async e => {
    e.preventDefault()
    try {
      const session = await signIn(email, password)
      console.log("Sign in successful", session)
      if (session && typeof session.AccessToken !== "undefined") {
        sessionStorage.setItem("accessToken", session.AccessToken)
        if (sessionStorage.getItem("accessToken")) {
          window.location.href = "/home"
        } else {
          console.error("Session token was not set properly.")
        }
      } else {
        console.error("SignIn session or AccessToken is undefined.")
      }
    } catch (error) {
      alert(`Sign in failed: ${error}`)
    }
  }

  const handleSignUp = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    try {
      await signUp(email, password)
      navigate("/confirm", { state: { email } })
    } catch (error) {
      alert(`Sign up failed: ${error}`)
    }
  }

  const handlePasswordForgotten = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    try {
      await signUp(email, password)
      navigate("/confirm", { state: { email } })
    } catch (error) {
      alert(`Sign up failed: ${error}`)
    }
  }

  return (
    <div className="loginForm">
      <h1>Welcome</h1>
      <h4>
        {isSignUp ? "Sign up to create an account" : "Sign in to your account"}
      </h4>
      <form onSubmit={isSignUp ? handleSignUp : (isSignIn ? handleSignIn: handlePasswordForgotten)}>
        <div>
          <input
            className="inputText"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        {isPasswordForgotten && (
          <div>
            <input
              className="inputText"
              id="verificationcode"
              type="text"
              value={verificationcode}
              onChange={e => setVerificationcode(e.target.value)}
              placeholder="Verification Code"
              required
            />
          </div>
        )}
        {(!isPasswordForgotten) && (
          <div>
            <input
              className="inputText"
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
        )}
        {isSignUp && (
          <div>
            <input
              className="inputText"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
        )}

        <button type="submit">{isSignUp ? "Sign Up" : ( isPasswordForgotten ? "Submit verification code" : "Sign In" )}</button>
      </form>

      <div>
        <button onClick={() => setIsSignUp(true) && setIsSignIn(false) && setIsPasswordForgotten(false)}>
          Sign Up
        </button>
      </div>

      {(!isPasswordForgotten) && (
        <div>
          <button onClick={() => setIsSignUp(false) && setIsSignIn(false) && setIsPasswordForgotten(true)}>
            Forgot your password?
          </button>
        </div>
      )}
      

    </div>
  )
}

export default LoginPage
