import axios from 'axios'

export const uploadFileCall = async (formData: any) => {
   console.log('FORM DATA', formData)
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
   console.log('FORM DATA', formData)
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
   console.log('FORM DATA', formData)
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
      const { data } = await axios.get(
         `${process.env.REACT_APP_BACKEND_URL}/admin/students/all`,
         { withCredentials: true }
      )
      return data
   } catch (error) {
      return error
   }
}

export const getHr = async () => {
   try {
      const { data } = await axios.get(
         `${process.env.REACT_APP_BACKEND_URL}/admin/hr/all`
      )
      console.log(data)
      return data
   } catch (error) {
      return error
   }
}
