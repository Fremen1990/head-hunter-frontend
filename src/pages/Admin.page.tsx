import React, { useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'

import { Admin } from '../components/AccountProfile/Admin/Admin'

// eslint-disable-next-line no-unused-vars
import {
   getStudents,
   importStudentsCall,
   uploadFileCall,
   importHrCall,
   getHr,
} from '../apiCalls'
import ReactJson from 'react-json-view'
import styled from 'styled-components'

export const AdminPage = () => {
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
      console.log(uploadFile)
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
      console.log('UPLOAD JSON', uploadStudentsJson)
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

   // ----------------------HR START ------------------------

   // upload students to be accepted by admin
   const [uploadHrJson, setUploadHrJson] = useState([])
   // import students to DB
   const [importHrStatus, setImportHrStatus] = useState({})
   // List students to be accepted by admin
   const [getAllHrJson, setGetAllHrJson] = useState([])

   const sendHrsFileHandler = async () => {
      const data = await new FormData()
      data.append('usersImport', uploadFile)
      const response = await uploadFileCall(data)
      setUploadHrJson(response)
      console.log('UPLOAD JSON', uploadStudentsJson)
   }

   const importHrsHandler = async () => {
      const reponse = await importHrCall(uploadStudentsJson)
      setUploadHrJson([])
      setImportHrStatus(reponse)
   }

   const getHrsHandler = async () => {
      const response = await getHr()
      setGetAllHrJson(response)
   }
   // ----------------------HR END ------------------------

   return (
      <>
         <Header />
         <PageContainer>
            <Admin>
               <TwoCollumnsSplit>
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
                     <div>
                        <h3>Import students JSON:</h3>
                        <ReactJson src={uploadStudentsJson} />
                     </div>

                     <br />
                     <div>
                        <h3>import students status</h3>
                        {importStudentsStatus && (
                           <ReactJson src={importStudentsStatus} />
                        )}
                     </div>

                     <br />

                     <div>
                        <h3>Get All Students</h3>
                        <ReactJson src={getAllStudentsJson} />
                     </div>
                  </div>

                  <div>
                     <h2>HR</h2>

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
                              onClick={sendHrsFileHandler}
                           >
                              Upload hr import file
                           </button>
                        </ListItem>

                        <ListItem>
                           3.) Click here to import hr to Database: <br />
                           <button
                              style={{ marginLeft: 30, padding: 8 }}
                              onClick={importHrsHandler}
                           >
                              Import hr to database{' '}
                           </button>
                        </ListItem>

                        <ListItem>
                           4.) Click here see all hr in Database: <br />
                           <button
                              style={{ marginLeft: 30, padding: 8 }}
                              onClick={getHrsHandler}
                           >
                              Get All Hr
                           </button>
                        </ListItem>
                     </ul>
                     <div>
                        <h3>Import hr JSON:</h3>
                        <ReactJson src={uploadHrJson} />
                     </div>

                     <br />
                     <div>
                        <h3>import hr status</h3>
                        {importStudentsStatus && (
                           <ReactJson src={importHrStatus} />
                        )}
                     </div>

                     <br />

                     <div>
                        <h3>Get All Hr</h3>
                        <ReactJson src={getAllHrJson} />
                     </div>
                  </div>
               </TwoCollumnsSplit>
            </Admin>
         </PageContainer>
      </>
   )
}
