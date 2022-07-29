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
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         }
         const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            { email, pwd },
            config
         )
         localStorage.setItem('userToken', data.token)
         localStorage.setItem('user', data.user)
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
