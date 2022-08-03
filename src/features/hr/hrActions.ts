import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

type CandidateId = {
   id: string
}

export const fetchHrCandidates = createAsyncThunk(
   'hr/fetchHrCandidates',
   async (arg, thunkAPI) => {
      try {
         const { data } = await api.get('/hr/candidate/list')
         return data
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const bookCallCandidate = createAsyncThunk(
   '/hr/bookCallCandidate/',
   async ({ id }: CandidateId, thunkAPI) => {
      try {
         await api.patch(`/hr/candidate/`, { id })
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const disinterestCandidate = createAsyncThunk(
   '/hr/undefined',
   async ({ id }: CandidateId, thunkAPI) => {
      try {
         await api.patch('/hr/undefined', { id })
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const HiredCandidate = createAsyncThunk(
   '/hr/undefined',
   async ({ id }: CandidateId, thunkAPI) => {
      try {
         await api.patch('/hr/undefined', { id })
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)
