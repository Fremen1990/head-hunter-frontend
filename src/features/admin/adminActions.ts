import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   UploadFileFailedInterface,
   UploadFileResponseInterface,
   StudentUploadFileType,
   UserType,
} from 'types'
import { AdminState } from './adminSlice'
import { RootState } from '../../app/store'
import { api } from '../../utils/axios'
import { getStudents } from '../../apiCalls'
import axios from 'axios'

export const uploadFileCall = createAsyncThunk<
   UploadFileResponseInterface | UploadFileFailedInterface,
   StudentUploadFileType,
   { state: RootState }
>('admin/uploadFileCall', async (formData: any, thunkAPI) => {
   try {
      const response = await axios.post(
         'http://localhost:8000/admin/upload',
         formData,
         {
            withCredentials: true,
            headers: {
               'content-type': 'multipart/form-data',
            },
         }
      )
      const data = await response.data
      if (response.status === 201) {
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})
export const getAllUsers = createAsyncThunk<
   UserType[],
   unknown,
   { state: RootState }
>('admin/getAllUsers', async (arg: unknown, thunkAPI) => {
   try {
      const response = await api.get('admin/user/all')
      const data = await response.data
      console.log('Response from grt all user', response)
      if (response.status === 200) {
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})
