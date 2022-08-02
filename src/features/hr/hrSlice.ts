import { createSlice } from '@reduxjs/toolkit'
import { fetchHrCandidates } from './hrActions'

export interface CandidateState {
   candidates: []
   isFetching: false
   isSuccess: false
   isError: false
   errorMessage: ''
}

const initialState: CandidateState = {
   candidates: [],
   isFetching: false,
   isSuccess: false,
   isError: false,
   errorMessage: '',
}

export const hrSlice = createSlice({
   name: 'hr',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchHrCandidates.pending]: (state) => {
         state.isFetching = true
      },
      [fetchHrCandidates.rejected]: (state, { payload }) => {
         state.isFetching = false
         state.isError = true
         state.errorMessage = payload.error
      },
      [fetchHrCandidates.fulfilled]: (state, { payload }) => {
         state.candidates = payload
         state.isFetching = false
         state.isSuccess = true
         state.isError = false
         state.errorMessage = ''
         return state
      },
   },
})

export const hrSelector = (state) => state.hr
