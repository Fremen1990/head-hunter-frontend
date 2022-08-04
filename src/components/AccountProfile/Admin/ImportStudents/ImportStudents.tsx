import styled from 'styled-components'
import React, { useState } from 'react'
import {
   getStudents,
   importStudentsCall,
   uploadFileCall,
} from '../../../../apiCalls'

export const ImportStudents = () => {
   // -------- Beautyful styling :D  START-----------
   const TwoCollumnsSplit = styled.div`
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 30px;
      //background-color: #27292a;
   `
   const ListItem = styled.div`
      font-size: 20px;
      padding: 20px;
   `
   // -------- Beautyful styling :D END-----------

   // --------------------Upload file START ----------------------
   const [uploadFile, setUploadFile] = useState('')
   const uploadFileHandler = (e: any) => {
      setUploadFile(e.target.files[0])
   }
   // --------------------Upload file END ----------------------

   // ----------------------STUDENTS START ------------------------

   // upload students to be accepted by admin
   const [uploadStudentsJson, setUploadStudentsJson] = useState([])
   // import students to DB
   const [importStudentsStatus, setImportStudentsStatus] = useState({})
   // List students to be accepted by admin
   const [getAllStudentsJson, setGetAllStudentsJson] = useState([])

   const sendStudentsFileHandler = async () => {
      const data = await new FormData()
      data.append('usersImport', uploadFile)
      const response = await uploadFileCall(data)
      setUploadStudentsJson(response)
   }

   const importStudentsHandler = async () => {
      const reponse = await importStudentsCall(uploadStudentsJson)
      setUploadStudentsJson([])
      setImportStudentsStatus(reponse)
   }

   const getStudentsHandler = async () => {
      const response = await getStudents()
      setGetAllStudentsJson(response)
   }
   // ----------------------STUDENTS END ------------------------
   return (
      <div>
         <h2>STUDENTS</h2>

         <ul>
            <ListItem>
               1.) Choole File: <br />
               <input
                  style={{ marginLeft: 30 }}
                  type="file"
                  name="file"
                  onChange={uploadFileHandler}
               />
            </ListItem>

            <ListItem>
               2.) Send File: <br />
               <button
                  style={{ marginLeft: 30, padding: 8 }}
                  onClick={sendStudentsFileHandler}
               >
                  Upload students import file
               </button>
            </ListItem>

            <ListItem>
               3.) Click here to import students to Database: <br />
               <button
                  style={{ marginLeft: 30, padding: 8 }}
                  onClick={importStudentsHandler}
               >
                  Import students to database{' '}
               </button>
            </ListItem>

            <ListItem>
               4.) Click here see all students in Database: <br />
               <button
                  style={{ marginLeft: 30, padding: 8 }}
                  onClick={getStudentsHandler}
               >
                  Get All Students
               </button>
            </ListItem>
         </ul>
      </div>
   )
}
