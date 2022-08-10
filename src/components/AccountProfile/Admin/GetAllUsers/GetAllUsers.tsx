import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   ImportButton,
   ImportButtonsContainer,
   ImportContainer,
} from '../ImportStudents/ImportStudents.styles'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import { getAllUsers } from '../../../../features/admin/adminActions'
import { AllUsersDataTable } from './AllUsersDataTable'
import { Button } from '../../../commons/Button/Button'
import { RootState } from '../../../../app/store'
import { Spinner } from '../../../commons/Spinner/Spinner'
import { toast } from 'react-toastify'

export const GetAllUsers = () => {
   const dispatch = useDispatch()

   const isFetching = useSelector((state: RootState) => state.admin.isFetching)

   const [allUsers, setAllUsers] = useState(null)

   const handleGetUsers = async () => {
      const allUsers = await dispatch(await getAllUsers())
      await setAllUsers(allUsers.payload)
      await toast.success('Baza użytkowników pobrana 👌')
   }
   const clearTable = async () => {
      await setAllUsers(null)
   }

   return (
      <>
         {isFetching ? <Spinner /> : null}
         <ImportContainer>
            <FormTitle>Pobież wszsytkich użytkowników</FormTitle>
            <ImportButtonsContainer>
               <ImportButton
                  method={handleGetUsers}
                  buttonTitle="Pobierz użytkoników"
               />
               {allUsers !== null ? (
                  <Button method={clearTable} buttonTitle="Wyczyść" />
               ) : null}
            </ImportButtonsContainer>
            <AllUsersDataTable allUsers={allUsers} />
         </ImportContainer>
      </>
   )
}
