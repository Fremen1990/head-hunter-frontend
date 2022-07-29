import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails, userLogin } from './userActions'

export interface UserInfo {
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
   reducers: {
      logout: (state) => {
         localStorage.removeItem('userToken') // delete token from storage
         state.loading = false
         state.userInfo = {}
         state.userToken = null
         state.error = null
      },
   },
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
      [getUserDetails.pending]: (state) => {
         state.loading = true
         state.error = null
      },
      [getUserDetails.fulfilled]: (state, { payload }) => {
         state.loading = false
         state.userInfo = payload
      },
      [getUserDetails.rejected]: (state, { payload }) => {
         state.loading = false
      },
   },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
