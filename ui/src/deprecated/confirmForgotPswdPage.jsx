// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { confirmForgotPswd } from "./authService"

const PswdForgottenVerificationPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // eslint-disable-next-line
  const [email, setEmail] = useState(location.state?.email || "")
  const [confirmationCode, setConfirmationCode] = useState("")
  const [pswd, setPswd] = useState("")
  const [isConfirmed, setConfirmed] = useState(false)

  const handleConfirm = async e => {
    e.preventDefault()
    try {
      await confirmForgotPswd(email, pswd, confirmationCode)
      alert("Password changed successfully!\nSign in on next page.")
      navigate("/login")
    } catch (error) {
      alert(`Failed to change password: ${error}`)
    }
  }

  return (
    <div className="loginForm">
      <h2>Confirm Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="inputText"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            className="inputText"
            type="text"
            value={confirmationCode}
            onChange={e => setConfirmationCode(e.target.value)}
            placeholder="Confirmation Code"
            required
          />
        </div>
        <button type="submit">Confirm Account</button>
      </form>
    </div>
  )
}

export default ConfirmUserPage
