import styled from 'styled-components'
import React, { useState } from 'react'
import {
   getHr,
   getStudents,
   importHrCall,
   importStudentsCall,
   uploadFileCall,
} from '../../../../apiCalls'
import ReactJson from 'react-json-view'

export const ImportHr = () => {
   // -------- Beautyful styling :D  START-----------
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
   }

   const importHrsHandler = async () => {
      const reponse = await importHrCall(uploadHrJson)
      setUploadHrJson([])
      setImportHrStatus(reponse)
   }

   const getHrsHandler = async () => {
      const response = await getHr()
      setGetAllHrJson(response)
   }
   // ----------------------HR END ------------------------
   return (
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
            {importHrStatus && <ReactJson src={importHrStatus} />}
         </div>

         <br />

         <div>
            <h3>Get All Hr</h3>
            <ReactJson src={getAllHrJson} />
         </div>
      </div>
   )
}
