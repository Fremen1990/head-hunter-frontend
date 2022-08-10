import axios from 'axios'
import { api } from './utils/axios'

export const uploadFileCall = async (formData: any) => {
   try {
      const { data } = await axios.post(
         `${process.env.REACT_APP_BACKEND_URL}/admin/upload`,
         formData,
         {
            headers: {
               'content-type': 'multipart/form-data',
            },
         }
      )
      return data
   } catch (error) {
      return error
   }
}

export const importStudentsCall = async (formData: any) => {
   try {
      const { data } = await axios.post(
         `${process.env.REACT_APP_BACKEND_URL}/admin/import-students`,
         formData
      )
      return data
   } catch (error) {
      return error
   }
}

export const importHrCall = async (formData: any) => {
   try {
      const { data } = await axios.post(
         `${process.env.REACT_APP_BACKEND_URL}/admin/import-hr`,
         formData
      )
      return data
   } catch (error) {
      return error
   }
}

export const getStudents = async () => {
   try {
      const { data } = await api.get('/admin/students/all')
      return data
   } catch (error) {
      return error
   }
}

export const getHr = async () => {
   try {
      const { data } = await api.get('/admin/hr/all')
      return data
   } catch (error) {
      return error
   }
}

export const generateTestUsers = async () => {
   try {
      const { data } = await api.post('/admin/import-students/random100')
      return data
   } catch (error) {
      return error
   }
}
