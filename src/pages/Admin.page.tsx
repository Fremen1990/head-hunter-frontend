import React, { useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { getStudents, importStudentsCall, uploadFileCall } from '../apiCalls'
import ReactJson from 'react-json-view'

export const AdminPage = () => {
   const [uploadFile, setUploadFile] = useState('')
   const [studentsJson, setStudentsJson] = useState([])
   const [getStudentsJson, setGetStudentsJson] = useState([])
   const [importStatus, setImportStatus] = useState([])
   const uploadFileHandler = (e) => {
      setUploadFile(e.target.files[0])
   }

   const sendFileHandler = async () => {
      const data = await new FormData()
      data.append('usersImport', uploadFile)

      console.log(data)
      const response = await uploadFileCall(data)
      setStudentsJson(response)
      console.log(response)
   }

   const importStudentsHandler = async () => {
      const reponse = await importStudentsCall(studentsJson)
      setStudentsJson([])
      setImportStatus(reponse)
   }

   const getStudentsHandler = async () => {
      console.log('GET STUDENTS')

      const response = await getStudents()
      setGetStudentsJson(response)
   }

   return (
      <>
         <Header />
         <PageContainer>
            <h1>Admin Page</h1>
            <p>
               For example how to use page container with header component :)
            </p>
            <button onClick={() => sendFileHandler()}>
               Upload Students file{' '}
            </button>
            <button onClick={importStudentsHandler}>
               Import students to database{' '}
            </button>
            <button onClick={getStudentsHandler}>Get Students</button>

            <label htmlFor="">Brose students file to import</label>
            <input type="file" name="file" onChange={uploadFileHandler} />

            {studentsJson && <ReactJson src={studentsJson} />}

            <ReactJson src={importStatus} />

            <ReactJson src={getStudentsJson} />
         </PageContainer>
      </>
   )
}
