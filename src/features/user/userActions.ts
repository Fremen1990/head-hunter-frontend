import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type Login = {
   email: string
   pwd: string
}

export const userLogin = createAsyncThunk(
   'user/login',
   async ({ email, pwd }: Login, { rejectWithValue }) => {
      try {
         const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            { email, pwd },
            { withCredentials: true }
         )
         localStorage.setItem('userToken', data.token)
         localStorage.setItem('id', data.user)
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

// todo authorization
export const getUserDetails = createAsyncThunk(
   'user/getUserDetails',
   async (arg, { getState, rejectWithValue }) => {
      try {
         const { user } = getState()

         const { data } = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/user/profile`,
            { withCredentials: true }
         )

         console.log('DATA USER', data)

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
