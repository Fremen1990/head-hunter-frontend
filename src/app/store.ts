import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/user/userSlice'
import { hrSlice } from '../features/hr/hrSlice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      hr: hrSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
