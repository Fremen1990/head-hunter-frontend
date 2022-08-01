import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

type Login = {
   email: string
   pwd: string
}

export const userLogin = createAsyncThunk(
   'user/login',
   async ({ email, pwd }: Login, { rejectWithValue }) => {
      try {
         const { data } = await api.post('/auth/login', { email, pwd })
         localStorage.setItem('userToken', data.token)
         localStorage.setItem('userId', data.user.id)
         localStorage.setItem('userRole', data.user.role)
         return data
      } catch (error: any) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
         } else {
            return rejectWithValue(error.message)
         }
      }
   }
)

export const userLogout = createAsyncThunk('user/logout', async () => {
   try {
      await api.get('/auth/logout')
   } catch (error: any) {
      return error
   }
})

export const getUserDetails = createAsyncThunk(
   'user/getUserDetails',
   async (arg, { getState, rejectWithValue }) => {
      try {
         // const { user } = getState()
         const { data } = await api.get('/user/current/profile')
         return data
      } catch (error: any) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
         } else {
            return rejectWithValue(error.message)
         }
      }
   }
)
