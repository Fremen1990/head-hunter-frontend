import styled from 'styled-components'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   importStudentsCall,
   uploadFileCall,
} from '../../../../features/admin/adminActions'
import { Button } from '../../../commons/Button/Button'
import { UploadFileDataTable } from '../UploadFileDataTable/UploadFileDataTable'
import { clearUploadFile } from '../../../../features/admin/adminSlice'
import { RootState } from '../../../../app/store'
import { ScrollingExample } from '../MessageModal/ModalChakra'
import { MessageModal } from '../MessageModal/MessageModal'

const ImportButtonsContainer = styled.div`
   display: flex;
   gap: 50px;
   align-items: center;
   justify-content: center;
   padding: 20px;
   width: 50%;
`

const ImportData = styled.div`
   display: flex;
`

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
      setUploadFileData(null)
      setMessageModalVisible(true)
   }
   const clearImport = async () => {
      await setUploadFileData(null)
      await dispatch(clearUploadFile([]))
   }

   return (
      <>
         <ImportButtonsContainer>
            {uploadFileData === null ? (
               <Button
                  method={handleClick}
                  buttonTitle="Wczytaj plik CSV"
                  style={{ background: 'green' }}
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

         {messageModalVisible && (
            <MessageModal setMessageModalVisible={setMessageModalVisible} />
         )}
         <UploadFileDataTable uploadFileData={uploadFileData} />
      </>
   )
}
