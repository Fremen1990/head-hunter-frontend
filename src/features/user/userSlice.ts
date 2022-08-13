import { getUserProfileResponse, LoginUserResponse } from 'types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   changePassword,
   fetchUserByToken,
   sendResetLink,
   userChangeStatus,
   userLogin,
   userLogout,
   userUpdateProfile,
} from './userActions'
import { RootState } from '../../app/store'

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
   userDetails: UserInfo | null | {}
   isFetching: boolean
   isSuccess: boolean
   message: string
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
   message: '',
   isError: false,
   errorMessage: '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      // ===================LOGIN USER=================================
      [userLogin.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [userLogin.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [userLogin.fulfilled]: (
         state,
         { payload }: PayloadAction<LoginUserResponse>
      ) => {
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
      // =============== SEND RESET LINK =============================
      [sendResetLink.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [sendResetLink.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ error: string; message: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
         state.isSuccess = payload.message
      },
      [sendResetLink.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.success = payload.message
      },
      // =============== CHANGE PASSWORD =============================
      [changePassword.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [changePassword.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.message
      },
      [changePassword.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.success = payload.message
      },
      // ===============FETCH USER BY TOKEN TO HEADER=======================
      [fetchUserByToken.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [fetchUserByToken.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string; statusCode: number }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.message
      },
      [fetchUserByToken.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<getUserProfileResponse>
      ) => {
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
      // ===============LOGOUT USER=======================
      [userLogout.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [userLogout.rejected]: (
         state: RootState,
         { payload }: PayloadAction<string>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload
      },
      [userLogout.fulfilled]: (state: RootState) => {
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
      // =============USER UPDATE PROFILE===============
      [userUpdateProfile.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [userUpdateProfile.rejected]: (state: RootState, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.message
      },
      [userUpdateProfile.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<string>
      ) => {
         state.message = payload // HERE should be data return
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },

      // =============USER CHANGE STATUS===============
      [userChangeStatus.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [userChangeStatus.rejected]: (state: RootState, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.message
      },
      [userChangeStatus.fulfilled]: (state: RootState, { payload }) => {
         state.userDetails.studentStatus = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
   },
})
