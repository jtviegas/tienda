import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Navigate } from 'react-router-dom';
import config from "../../config.json";
import { SessionUI } from './SessionUI';

import { signupAsync, confirmSignUpAsync, selectSessionStatus, selectSessionValue } from './sessionSlice';


export const Login = (props) => {

  const dispatch = useDispatch()
  const sessionValue = useSelector(selectSessionValue);
  const sessionStatus = useSelector(selectSessionStatus);

  const [email, setEmail] = useState( sessionValue ? sessionValue.email : '');
  const [pswd, setPswd] = useState('');
  const [code, setCode] = useState('');

  const onEmailChanged = e => setEmail(e.target.value)
  const onPswdChanged = e => setPswd(e.target.value)
  const onCodeChanged = e => setCode(e.target.value)

  const canLogin = [email, pswd].every(Boolean) //&& !isLoading
  const onLoginClicked = () => {
    dispatch(signupAsync({email: email, pswd: pswd}))
  }

  const canConfirm = [email, code].every(Boolean) //&& !isLoading
  const onConfirmClicked = () => {
    dispatch(confirmSignUpAsync({email: email, code: code}))
  }

  const signUpProps = {
    "email": email,
    "onEmailChanged": onEmailChanged,
    "secret": pswd,
    "onSecretChanged": onPswdChanged,
    "secretName": "password",
    "secretNamePlaceHolder": "your password here",
    "callType": "signup",
    "callName": "Sign Up",
    "onCallClicked": onSignUpClicked,
    "canCall": canSign,
  }

  const confirmProps = {
    "email": email,
    "onEmailChanged": onEmailChanged,
    "secret": code,
    "onSecretChanged": onCodeChanged,
    "secretName": "confirmation code",
    "secretNamePlaceHolder": "your confirmation code here",
    "callType": "confirm",
    "callName": "Confirm",
    "onCallClicked": onConfirmClicked,
    "canCall": canConfirm,
  }

  return (
    <Container>
      <div className="card my-5">
        { (!sessionValue) && <SessionUI {...signUpProps} /> }
        { (sessionValue && sessionValue.confirmed === false) && <SessionUI {...confirmProps} /> }
        { (sessionValue && sessionValue.confirmed === true) && <Navigate to="/login" replace /> }
      </div>
    </Container>
  )

}