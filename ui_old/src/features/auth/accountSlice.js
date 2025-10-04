import { createSlice } from '@reduxjs/toolkit'
import { signUp } from "../../services/authService"

const initialState = {
  account: {},
  status: 'idle',
  error: null
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    signedIn:{
      reducer(state, action) {
        state.account=action.payload
      },
    },
    signedUp: {
      reducer(state, action) {
        signUp(action.payload.email, action.payload.pswd, action.payload.referrer)
        //state.account=action.payload
      }
    }
  }
})

export const { signedIn, signedUp } = accountSlice.actions
export default accountSlice.reducer

export const getAccount = state => state.account.account


