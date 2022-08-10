import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   bookCallCandidate,
   disinterestCandidate,
   fetchHrCandidates,
   fetchHrInterviews,
   HiredCandidate,
} from './hrActions'
import { RootState } from '../../app/store'

export interface CandidateState {
   candidates: []
   isFetching: false
   isSuccess: false
   message: string
   isError: false
   errorMessage: ''
}

const initialState: CandidateState = {
   candidates: [],
   isFetching: false,
   isSuccess: false,
   message: '',
   isError: false,
   errorMessage: '',
}

export const hrSlice = createSlice({
   name: 'hr',
   initialState,
   reducers: {},
   extraReducers: {
      // ===============FETCH HR CANDIDATES=======================
      [fetchHrCandidates.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [fetchHrCandidates.rejected]: (state: RootState, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [fetchHrCandidates.fulfilled]: (state: RootState, { payload }) => {
         state.candidates = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      // ===============FETCH HR INTERVIEWS=======================
      [fetchHrInterviews.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [fetchHrInterviews.rejected]: (state: RootState, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [fetchHrInterviews.fulfilled]: (state: RootState, { payload }) => {
         state.candidates = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      // ===============FETCH HR CANDIDATES=======================
      [bookCallCandidate.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [bookCallCandidate.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [bookCallCandidate.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.message = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      [disinterestCandidate.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [disinterestCandidate.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [disinterestCandidate.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.message = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
      [HiredCandidate.pending]: (state: RootState) => {
         state.isFetching = true
      },
      [HiredCandidate.rejected]: (
         state: RootState,
         { payload }: PayloadAction<{ error: string }>
      ) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [HiredCandidate.fulfilled]: (
         state: RootState,
         { payload }: PayloadAction<{ message: string }>
      ) => {
         state.message = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
   },
})

export const hrSelector = (state) => state.hr
