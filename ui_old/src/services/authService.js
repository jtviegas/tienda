// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    SignUpCommand,
    ConfirmSignUpCommand,
    ForgotPasswordCommand,
    ConfirmForgotPasswordCommand
  } from "@aws-sdk/client-cognito-identity-provider"
  import config from "../config.json"
  
  export const cognitoClient = new CognitoIdentityProviderClient({
    region: config.region
  })
  
  export const signIn = async (email, password) => {
    const params = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: config.clientId,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password
      }
    }
    try {
      const command = new InitiateAuthCommand(params)
      const { AuthenticationResult } = await cognitoClient.send(command)
      if (AuthenticationResult) {
        sessionStorage.setItem("idToken", AuthenticationResult.IdToken || "")
        sessionStorage.setItem(
          "accessToken",
          AuthenticationResult.AccessToken || ""
        )
        sessionStorage.setItem(
          "refreshToken",
          AuthenticationResult.RefreshToken || ""
        )
        return AuthenticationResult
      }
    } catch (error) {
      console.error("Error signing in: ", error)
      throw error
    }
  }
  
  export const signUp = async (email, password) => {
    const params = {
      ClientId: config.clientId,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: email
        }
      ]
    }
    try {
      const command = new SignUpCommand(params)
      const response = await cognitoClient.send(command)
      console.log("Sign up success: ", response)
      return response
    } catch (error) {
      console.error("Error signing up: ", error)
      throw error
    }
  }

  export const forgotPswd = async (email) => {
    const params = { 
      ClientId: config.clientId,
      Username: email
    };
    try {
      const command = new ForgotPasswordCommand(params)
      const response = await cognitoClient.send(command)
      console.log("forgot pswd command success: ", response)
      return response
    } catch (error) {
      console.error("Error on forgot pswd command: ", error)
      throw error
    }
  }

  export const confirmForgotPswd = async (email, pswd, code) => {
    const params = { 
      ClientId: config.clientId,
      Username: email, 
      ConfirmationCode: code, 
      Password: pswd
    };
    try {
      const command = new ConfirmForgotPasswordCommand(params)
      const response = await cognitoClient.send(command)
      console.log("confirm forgot pswd command success: ", response)
      return response
    } catch (error) {
      console.error("Error on confirm forgot pswd command: ", error)
      throw error
    }
  }
  
  export const confirmSignUp = async (username, code) => {
    const params = {
      ClientId: config.clientId,
      Username: username,
      ConfirmationCode: code
    }
    try {
      const command = new ConfirmSignUpCommand(params)
      await cognitoClient.send(command)
      console.log("User confirmed successfully")
      return true
    } catch (error) {
      console.error("Error confirming sign up: ", error)
      throw error
    }
  }
  