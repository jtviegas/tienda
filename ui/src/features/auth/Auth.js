import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import qs from "qs";
import { getAccount } from './accountSlice';
import config from "../../config.json";
import { signedIn, signedUp } from './accountSlice';
import { notificationIn } from '../notification/notificationSlice';
import { LogInUp } from '../../components/LogInUp';
import { useSigInUpMutation } from './authSlice';

export const Auth = (props) => {

  const referrer = qs.parse(props.location.search, { ignoreQueryPrefix: true }).referrer

  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')

  const [signInUp, { isLoading }] = useSigInUpMutation()

  const onEmailChanged = e => setEmail(e.target.value)
  const onPswdChanged = e => setPswd(e.target.value)

  const canSign = [email, pswd].every(Boolean) && !isLoading

  const onSignInClicked = () => {
    if (email && pswd) {
      try{
        dispatch(signedIn({email, pswd}));
        history.push(referrer);
      }
      catch(error){
        console.error("onSignInClicked: ", error)
      }
    }
  }

  const onSignUpClicked = () => {
    if (email && pswd) {
      try{
        dispatch(signedUp({email, pswd}).then((o) => console.log("signedUp then", o)).catch((err) => {
          console.log("signedUp reducer catch", err);
          throw err;
        }));
        history.push(referrer);
      }
      catch(error){
        console.error("onSignUpClicked: ", error)
      }
    }
  }

  const onForgotClicked = () => {
    if (email && pswd) {
      try{
        dispatch(signedIn({email, pswd}));
        history.push(referrer);
      }
      catch(error){
        console.error("onSignInClicked: ", error)
      }
    }
  }

  const logInUpProps = {
    email: email,
    pswd: pswd,
    onEmailChanged: onEmailChanged,
    onPswdChanged: onPswdChanged,
    onSignInClicked: onSignInClicked,
    onSignUpClicked: onSignUpClicked,
    onForgotClicked: onForgotClicked, 
    canSign: canSign
  }

  return (
    <LogInUp {...logInUpProps}/>
  )


}