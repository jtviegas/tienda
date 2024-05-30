import { createSlice } from '@reduxjs/toolkit'

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
        console.log("state:", state)
        console.log("action:", action)
        state.account.user ="xpt2"
        state.account.token="222"
        console.log("state:", state)
        console.log("action:", action)
      },
    },
    signedUp: {
      reducer(state, action) {
        console.log("state:", state)
        console.log("action:", action)
        state.account.user ="xpt1"
        state.account.token="111"
        console.log("state:", state)
        console.log("action:", action)
      }
    }
  }
})

export const { signedIn, signedUp } = accountSlice.actions
export default accountSlice.reducer

export const getAccount = state => state.account.account