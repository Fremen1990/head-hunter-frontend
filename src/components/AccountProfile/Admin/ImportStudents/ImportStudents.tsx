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

      console.log('Wczytaj CSV clicked')
      console.log('Upload file data', uploadFileData)
   }

   const handleClick = (e: React.MouseEvent<HTMLButtonElement | null>) => {
      hiddenFileInput.current.click()
   }
   const importStudentsHandler = async () => {
      await dispatch(await importStudentsCall(uploadFileData))
      setUploadFileData(null)
      setMessageModalVisible(true)
   }
   const clearImport = async () => {
      await setUploadFileData(null)
      await dispatch(clearUploadFile([]))
   }

   return (
      <>
         <ImportContainer>
            <FormTitle>Zaimportuj Studentów</FormTitle>
            <ImportButtonsContainer>
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
                     style={{ background: 'green' }}
                  />
               ) : null}

               {uploadFileData !== null ? (
                  <Button method={clearImport} buttonTitle="Wyczyść" />
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
