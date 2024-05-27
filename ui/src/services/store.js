import { configureStore } from '@reduxjs/toolkit'
/*
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
*/
import { apiSlice } from '../features/api/apiSlice'
import accountReducer from "../features/account/accountSlice"


export default configureStore({
  reducer: {
    /*
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    */
    account: accountReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
    
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
  
})