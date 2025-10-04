import { configureStore, combineReducers } from '@reduxjs/toolkit'

/*
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
*/
import { apiSlice } from '../features/api/apiSlice'
import accountReducer from "../features/auth/accountSlice"
import notificationReducer from "../features/notification/notificationSlice"


export default configureStore({
  reducer: combineReducers({
    account: accountReducer,
    notification: notificationReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
    
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
  
})