import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/user/userSlice'
import { hrSlice } from '../features/hr/hrSlice'
import { adminSlice } from '../features/admin/adminSlice'

export const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      hr: hrSlice.reducer,
      admin: adminSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
