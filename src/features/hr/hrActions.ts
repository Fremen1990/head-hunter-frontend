import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

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
