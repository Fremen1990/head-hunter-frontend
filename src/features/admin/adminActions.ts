import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   UploadFileFailedInterface,
   UploadFileResponseInterface,
   StudentUploadFileType,
   UserType,
   ImportUserResponse,
} from 'types'
import { AdminState } from './adminSlice'
import { RootState } from '../../app/store'
import { api } from '../../utils/axios'
import { getStudents } from '../../apiCalls'
import axios from 'axios'
import { toast } from 'react-toastify'

// ===================UPLOAD FILE=================================
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
         toast.success('Plik załadowany!')
         return data
      } else {
         toast.error('Coś poszło nie tak!')

         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

// ===================IMPORT STUDENTS =================================
export const importStudentsCall = createAsyncThunk<
   ImportUserResponse,
   StudentUploadFileType,
   { state: RootState }
>('admin/importStudents', async (formData: any, thunkAPI) => {
   try {
      const response = await api.post('admin/import-students', formData, {})
      const data = await response.data
      if (response.status === 201) {
         toast.success('Studenci zaimportowani !')
         return data
      } else {
         toast.error('Coś poszło nie tak!')
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

// ===================IMPORT HR =================================
export const importHrCall = createAsyncThunk<
   ImportUserResponse,
   StudentUploadFileType,
   { state: RootState }
>('admin/importHr', async (formData: any, thunkAPI) => {
   try {
      const response = await api.post('admin/import-hr', formData, {})
      const data = await response.data
      if (response.status === 201) {
         toast.success('Studenci zaimportowani !')
         return data
      } else {
         toast.error('Coś poszło nie tak!')
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})
// ===================GET ALL USERS=================================
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
