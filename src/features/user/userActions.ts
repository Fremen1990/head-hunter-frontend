import {
   LoginUser,
   LoginUserResponse,
   getUserProfileResponse,
   LogoutUserResponse,
   UpdateStudentResponse,
   UpdateStudentProfile,
   ResetPasswordInterface,
} from 'types'

import { api } from '../../utils/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const userLogin = createAsyncThunk<
   LoginUserResponse,
   LoginUser,
   { state: RootState }
>('user/login', async ({ email, pwd }: LoginUser, thunkAPI) => {
   try {
      const response = await api.post('/auth/login', { email, pwd })
      const data = await response.data
      if (response.status === 201) {
         localStorage.setItem('userToken', data.token)
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const sendResetLink = createAsyncThunk<
   Partial<LoginUser>,
   Partial<LoginUserResponse>,
   { state: RootState }
>('/auth/send-reset-password-link', async ({ email }, thunkAPI) => {
   try {
      const response = await api.post('/auth/send-reset-password-link', {
         email,
      })
      const data = await response.data
      console.log('status', response.status)
      if (response.status === 201) {
         console.log(data)
         data.message = `Link z tokenem został wysłany na adres ${email}`
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      if (e.response.data.statusCode === 404) {
         e.response.data.message = ''
         e.response.data.error = `Nie znaleziono takiego adresu ${email}.`
      }
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const changePassword = createAsyncThunk(
   '/auth/change-password',
   async (
      {
         email,
         resetPasswordToken,
         newPwd,
         newPwdConfirm,
      }: ResetPasswordInterface,
      thunkAPI
   ) => {
      try {
         const response = await api.post('/auth/change-password', {
            email,
            resetPasswordToken,
            newPwd,
            newPwdConfirm,
         })
         const data = await response.data
         if (response.status === 200) {
            data.message = `Zmiana hasła przebiegła pomyślnie. Można się logować :)`
            return data
         } else {
            return thunkAPI.rejectWithValue(data.error)
         }
      } catch (e: any) {
         if (e.response.data.statusCode === 409) {
            e.response.data.message = `Podany token jest niepoprawny albo został już wykorzystany.`
         } else if (e.response.data.statusCode === 500) {
            e.response.data.message = `Podano niepoprawne dane. Spróbuj jeszcze raz...`
         }
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

export const fetchUserByToken = createAsyncThunk<
   getUserProfileResponse,
   undefined,
   { state: RootState }
>('user/fetchByToken', async (arg, thunkAPI) => {
   try {
      const { data } = await api.get('/user/current/profile')
      return data
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const userLogout = createAsyncThunk<
   LogoutUserResponse,
   undefined,
   { state: RootState }
>('user/logout', async (arg, thunkAPI) => {
   try {
      const response = await api.get('/auth/logout')
      const { data } = await response
      if (response.status === 200) {
         localStorage.clear()
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const userUpdateProfile = createAsyncThunk<
   UpdateStudentResponse,
   UpdateStudentProfile
   // { state: RootState }
>('user/updateProfile', async (formData, thunkAPI) => {
   try {
      const state = (await thunkAPI.getState()) as RootState
      const response = await api.put(`/student/${state.user.id}`, formData)
      const data = response.data
      if (response.status === 200) {
         return data
      } else {
         return thunkAPI.rejectWithValue(data.error)
      }
   } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

// dispatch(userUpdateProfile(userUpdateMock))
//
//
// const userUpdateMock = {
//   studentStatus: 'available',
//   tel: '666-666-666',
//   firstName: 'Tomasz UPDATED',
//   lastName: 'UPDATEOWNIK',
//   githubUserName: 'fremen1990',
//   portfolioUrls: ['rv', 'rfev'],
//   projectUrls: ['rv', 'rfev'],
//   bio: 'My bio is aweeeesomeeeeeeeeee',
//   expectedTypeOfWork: 'any',
//   targetWorkCity: 're',
//   expectedContractType: 'any',
//   expectedSalary: '6000 USD',
//   canTakeApprenticeship: 'yes',
//   monthsOfCommercialExp: 5,
//   education: '',
//   workExperience: '',
//   courses: '',
// }
