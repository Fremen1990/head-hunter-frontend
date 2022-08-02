import { createSlice } from '@reduxjs/toolkit'
import { fetchUserByToken, userLogin, userLogout } from './userActions'
// import { getUserDetails, userLogin, userLogout } from './userActions'

export interface UserInfo {
   active: boolean
   email: string
   id: string
   role: string
   token: string
}

export interface UserState {
   id: string
   email: string
   role: string
   currentSessionToken: string | null
   userDetails: {} | null
   isFetching: boolean
   isSuccess: boolean
   isError: boolean
   errorMessage: string
}

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
   ? localStorage.getItem('userToken')
   : null

const initialState: UserState = {
   id: '',
   email: '',
   role: '',
   currentSessionToken: userToken,
   userDetails: {},
   isFetching: false,
   isSuccess: false,
   isError: false,
   errorMessage: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      // LOGIN USER
      [userLogin.pending]: (state) => {
         state.isFetching = true
      },
      [userLogin.rejected]: (state, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [userLogin.fulfilled]: (state, { payload }) => {
         state.id = payload.id
         state.email = payload.email
         state.role = payload.role
         state.currentSessionToken = payload.token
         // state.userDetails = payload.userDetails
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      // FETCH USER BY TOKEN
      [fetchUserByToken.pending]: (state) => {
         state.isFetching = true
      },
      [fetchUserByToken.rejected]: (state, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [fetchUserByToken.fulfilled]: (state, { payload }) => {
         console.log('78 USER SLICE PAYLOAD', payload)
         state.id = payload.id
         state.email = payload.email
         state.role = payload.role
         state.currentSessionToken = payload.currentSessionToken
         state.userDetails = payload.student
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      // LOGOUT USER
      [userLogout.pending]: (state) => {
         state.isFetching = true
      },
      [userLogout.rejected]: (state, { payload }) => {
         console.log('payload', payload)
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload
      },
      [userLogout.fulfilled]: (state) => {
         localStorage.clear()
         state.id = ''
         state.email = ''
         state.role = ''
         state.currentSessionToken = null
         state.userDetails = null
         state.isFetching = false
         state.isSuccess = false
         state.isError = false
         state.errorMessage = ''
      },
   },
})

// eslint-disable-next-line no-undef
export const userSelector = (state) => state.user
