import { createSlice } from '@reduxjs/toolkit'


const initialState = {}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationIn:{
      reducer(state, action) {
        state.notification=action.payload
      },
    },
    notificationOut: {
      reducer(state, action) {
        state.notification={}
      }
    }
  }
})

export const { notificationIn, notificationOut } = notificationSlice.actions
export default notificationSlice.reducer

export const getNotification = state => state.notification.notification