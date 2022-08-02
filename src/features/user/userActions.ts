import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

type Login = {
   email: string
   pwd: string
}

export const userLogin = createAsyncThunk(
   'user/login',
   async ({ email, pwd }: Login, thunkAPI) => {
      try {
         const response = await api.post('/auth/login', { email, pwd })
         const data = await response.data
         console.log('response', data.error)

         if (response.status === 201) {
            localStorage.setItem('userToken', data.token)
            return data
         } else {
            return thunkAPI.rejectWithValue(data.error)
         }
      } catch (e: any) {
         console.log('Error', e.response.data)
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const fetchUserByToken = createAsyncThunk(
   'user/fetchByToken',
   async (arg, thunkAPI) => {
      try {
         // const { user } = getState()
         const { data } = await api.get('/user/current/profile')
         return data
      } catch (e: any) {
         console.log('Error', e.response.data)
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const userLogout = createAsyncThunk(
   'user/logout',
   async (arg, thunkAPI) => {
      try {
         const response = await api.get('/auth/logout')
         const { data } = await response
         if (response.status === 200) {
            return data
         } else {
            return thunkAPI.rejectWithValue(data.error)
         }
      } catch (e: any) {
         console.log('Error', e.response.data)
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)
