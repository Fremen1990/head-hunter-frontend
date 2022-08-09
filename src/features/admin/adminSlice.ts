import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllUsers, uploadFileCall } from './adminActions'
import {
   HrType,
   StudentType,
   ImportUserResponse,
   UploadFileFailedInterface,
   UploadFileResponseInterface,
   UserType,
} from 'types'

export interface AdminState {
   uploadFile: UploadFileResponseInterface | UploadFileFailedInterface | []
   uploadedStudentsMessage: ImportUserResponse | {}
   uploadedHrMessage: ImportUserResponse | {}
   allUsers: UserType[]
   allHr: HrType[]
   allStudents: StudentType[]
   isFetching: boolean
   isSuccess: boolean
   message: string
   isError: boolean
   errorMessage: string
}

const initialState: AdminState = {
   uploadFile: [],
   uploadedStudentsMessage: {},
   uploadedHrMessage: {},
   allUsers: [],
   allHr: [],
   allStudents: [],
   isFetching: false,
   isSuccess: false,
   message: '',
   isError: false,
   errorMessage: '',
}

export const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {},
   extraReducers: {
      // ===================UPLOAD FILE=================================
      [uploadFileCall.pending]: (state: AdminState) => {
         state.isFetching = true
      },
      [uploadFileCall.rejected]: (
         state: AdminState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         console.log('REJECT PAYLOAD')
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [uploadFileCall.fulfilled]: (
         state: AdminState,
         {
            payload,
         }: PayloadAction<
            UploadFileResponseInterface | UploadFileFailedInterface
         >
      ) => {
         console.log('FULLFIELD PAYLOAD', payload)
         state.uploadFile = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      // ===================GET ALL USERS=================================
      [getAllUsers.pending]: (state: AdminState) => {
         state.isFetching = true
      },
      [getAllUsers.rejected]: (
         state: AdminState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         console.log('REJECT PAYLOAD')
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [getAllUsers.fulfilled]: (
         state: AdminState,
         { payload }: PayloadAction<UserType[]>
      ) => {
         console.log('FULLFIELD PAYLOAD', payload)
         state.allUsers = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
   },
})
