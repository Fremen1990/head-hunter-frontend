import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHrCandidates = createAsyncThunk(
   'hr/fetchHrCandidates',
   async (arg, thunkAPI) => {
      try {
         const { data } = await api.get('/hr/candidate/list')
         return data
      } catch (e: any) {
         console.log('Error', e.response.data)
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)
