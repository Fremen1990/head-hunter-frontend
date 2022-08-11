import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
   importStudentsCall,
   uploadFileCall,
} from '../../../../features/admin/adminActions'
import { Button } from '../../../commons/Button/Button'
import { clearUploadFile } from '../../../../features/admin/adminSlice'
import { MessageModal } from '../MessageModal/MessageModal'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import {
   ImportButton,
   ImportButtonsContainer,
   ImportContainer,
} from './ImportStudents.styles'
import { UploadStudentsFileDataTable } from './UploadStudentsFileDataTable'
import { saveAs } from 'file-saver'

export const ImportStudents = () => {
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
   const importStudentsHandler = async () => {
      await dispatch(await importStudentsCall(uploadFileData))
      await setUploadFileData(null)
      await setMessageModalVisible(true)
   }
   const clearImport = async () => {
      await setUploadFileData(null)
      await dispatch(clearUploadFile([]))
   }

   const handleSaveFile = () => {
      saveAs(
         'https://raw.githubusercontent.com/Fremen1990/head-hunter-frontend/develop/Students%20x50.csv',
         'students_example_import_file.csv'
      )
   }

   return (
      <>
         <ImportContainer>
            <FormTitle>Zaimportuj Studentów</FormTitle>
            <ImportButtonsContainer>
               <Button
                  method={handleSaveFile}
                  buttonTitle="Przykładowy plik importu"
                  style={{ background: '#1e92f4', fontSize: 16 }}
               />

               {uploadFileData === null ? (
                  <ImportButton
                     method={handleClick}
                     buttonTitle="Wczytaj plik CSV"
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
                     method={importStudentsHandler}
                     buttonTitle="Zaimportuj studentów do Bazy"
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
         </ImportContainer>

         {messageModalVisible && (
            <MessageModal setMessageModalVisible={setMessageModalVisible} />
         )}
         <UploadStudentsFileDataTable uploadFileData={uploadFileData} />
      </>
   )
}
