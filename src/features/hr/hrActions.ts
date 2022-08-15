import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserProfileResponse, HrCandidateAddResponse } from 'types'
import { RootState } from '../../app/store'

type CandidateId = {
   studentId: string
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

export const fetchFilterHrCandidates = createAsyncThunk<
   getUserProfileResponse[],
   { newObj },
   { state: RootState }
>('hr/fetchFilterHrCandidates', async ({ newObj }, thunkAPI) => {
   try {
      const { data } = await api.post('/hr/candidate/list/filter', {
         newObj,
      })
      return data
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const fetchFilterHrInterviews = createAsyncThunk<
   getUserProfileResponse[],
   { newObj },
   { state: RootState }
>('hr/fetchFilterHrInterviews', async ({ newObj }, thunkAPI) => {
   try {
      const { data } = await api.post('/hr/interviews/filter', { newObj })
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

export const disinterestCandidate = createAsyncThunk<
   HrCandidateAddResponse,
   { hrUserId: string; studentId: string },
   { state: RootState }
>(
   '/hr/interviews/:studentId/remove',
   async ({ studentId }: CandidateId, thunkAPI) => {
      console.log(studentId)
      try {
         await api.delete(`hr/interviews/${studentId}/remove`)
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const HiredCandidate = createAsyncThunk<
   HrCandidateAddResponse,
   { hrUserId: string; studentId: string },
   { state: RootState }
>(
   '/hr/interviews/:studentId/hire',
   async ({ studentId }: CandidateId, thunkAPI) => {
      try {
         await api.patch(`hr/interviews/${studentId}/hire`)
      } catch (e: any) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)
