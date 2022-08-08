import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserProfileResponse, HrCandidateAddResponse } from 'types'
import { RootState } from '../../app/store'

type CandidateId = {
   id: string
}

export const fetchHrCandidates = createAsyncThunk<
   getUserProfileResponse[],
   undefined,
   { state: RootState }
>('hr/fetchHrCandidates', async (arg, thunkAPI) => {
   try {
      const { data } = await api.get('/hr/candidate/list')
      return data
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const fetchHrInterviews = createAsyncThunk<
   getUserProfileResponse[],
   undefined,
   { state: RootState }
>('hr/fetchHrInterviews', async (arg, thunkAPI) => {
   try {
      const { data } = await api.get('/hr/interviews')
      return data
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const bookCallCandidate = createAsyncThunk<
   HrCandidateAddResponse,
   { hrUserId: string; studentId: string },
   { state: RootState }
>('/hr/bookCallCandidate/', async ({ studentId }: CandidateId, thunkAPI) => {
   try {
      await api.patch(`/hr/candidate`, { studentId })
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

// TODO TO BE FINISHED ON BACKEND !!
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
