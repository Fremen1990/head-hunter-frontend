import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './userActions'

interface UserInfo {
   active: boolean
   email: string
   id: string
   role: string
   token: string
}

export interface UserState {
   loading: boolean
   userInfo: UserInfo | {}
   userToken: string | null
   error: string | null
   success: boolean
}
// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
   ? localStorage.getItem('userToken')
   : null

const initialState: UserState = {
   loading: false,
   userInfo: {},
   userToken,
   error: null,
   success: false,
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      // login user
      [userLogin.pending]: (state: UserState) => {
         state.loading = true
         state.error = null
      },
      [userLogin.fulfilled]: (state: UserState, { payload }) => {
         state.loading = false
         state.userInfo = payload.user
         state.userToken = payload.token
      },
      [userLogin.rejected]: (state: UserState, { payload }) => {
         state.loading = false
         state.error = payload
      },
   },
})

export default userSlice.reducer
