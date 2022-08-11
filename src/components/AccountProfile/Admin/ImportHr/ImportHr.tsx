import styled from 'styled-components'
import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import { useDispatch } from 'react-redux'
import {
   importHrCall,
   uploadFileCall,
} from '../../../../features/admin/adminActions'
import { Button } from '../../../commons/Button/Button'
import { clearUploadFile } from '../../../../features/admin/adminSlice'
import { MessageModal } from '../MessageModal/MessageModal'
import {
   ImportButton,
   ImportContainer,
} from '../ImportStudents/ImportStudents.styles'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import { UploadHrFileDataTable } from './UploadHrFileDataTable'

const ImportButtonsContainer = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
   justify-content: center;
   padding: 20px;
   width: 50%;
`

export const ImportHr = () => {
   const dispatch = useDispatch()
   const hiddenFileInput = React.useRef(null)
   const [uploadFileData, setUploadFileData] = useState(null)
   const [messageModalVisible, setMessageModalVisible] = useState(false)

   const uploadFileHandler = async (e: any) => {
      await setUploadFileData(null)
      const data = await new FormData()
      await data.append('usersImport', e.target.files[0])
      const res = await dispatch(await uploadFileCall(data))
      await setUploadFileData(res.payload)
   }

   const handleClick = (e: React.MouseEvent<HTMLButtonElement | null>) => {
      hiddenFileInput.current.click()
   }
   const importHrHandler = async () => {
      await dispatch(await importHrCall(uploadFileData))
      await setUploadFileData(null)
      await setMessageModalVisible(true)
   }
   const clearImport = async () => {
      await setUploadFileData(null)
      await dispatch(clearUploadFile([]))
   }

   const handleSaveFile = () => {
      saveAs(
         'https://raw.githubusercontent.com/Fremen1990/head-hunter-frontend/develop/hr.csv',
         'hr_example_import_file.csv'
      )
   }

   console.log(uploadFileData)
   return (
      <>
         <ImportContainer>
            <FormTitle>Zaimportuj HR</FormTitle>

            <ImportButtonsContainer>
               <Button
                  method={handleSaveFile}
                  buttonTitle="Przykładowy plik"
                  style={{ background: '#1e92f4', fontSize: 16 }}
               />

               {uploadFileData === null ? (
                  <ImportButton
                     method={handleClick}
                     buttonTitle="Wczytaj plik CSV"
                     style={{ fontSize: 16 }}
                  />
               ) : null}
               <input
                  style={{ display: 'none' }}
                  type="file"
                  id="fileInput"
                  name="file"
                  ref={hiddenFileInput}
                  onChange={uploadFileHandler}
               />

               {uploadFileData !== null ? (
                  <Button
                     method={importHrHandler}
                     buttonTitle="Zaimportuj HR do Bazy"
                     style={{ background: 'green', fontSize: 16 }}
                  />
               ) : null}

               {uploadFileData !== null ? (
                  <Button
                     method={clearImport}
                     buttonTitle="Wyczyść"
                     style={{ fontSize: 16 }}
                  />
               ) : null}
            </ImportButtonsContainer>

            {messageModalVisible && (
               <MessageModal setMessageModalVisible={setMessageModalVisible} />
            )}

            {uploadFileData ? (
               <UploadHrFileDataTable uploadFileData={uploadFileData} />
            ) : null}
         </ImportContainer>
      </>
   )
}
