import { configureStore } from '@reduxjs/toolkit'
import backgroundReducer from './features/backgroundSlice'
import soundReducer from './features/soundSlice'
    
const store = configureStore({
  reducer: {
    background: backgroundReducer,
    sound: soundReducer
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store