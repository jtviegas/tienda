import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    authenticated(state, action) {
      state.push(action.payload)
    }
  }
})

export const { authenticated } = accountSlice.actions
export default accountSlice.reducer