import React, { useState } from 'react'
import {
   ImportButton,
   ImportButtonsContainer,
   ImportContainer,
} from '../ImportStudents/ImportStudents.styles'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import { AllStudentsDataTable } from './AllStudentsDataTable'
import { Button } from '../../../commons/Button/Button'
import { Spinner } from '../../../commons/Spinner/Spinner'
import { getStudents } from '../../../../apiCalls'
import { toast } from 'react-toastify'

export const GetAllStudents = () => {
   const [allStudents, setAllStudents] = useState(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const handleGetStudents = async () => {
      setIsLoading(true)
      const allStudents = await getStudents()
      await setAllStudents(allStudents)
      setIsLoading(false)
      toast.success('Baza studentów pobrana 👍')
   }
   const clearTable = async () => {
      await setAllStudents(null)
   }

   return (
      <>
         {isLoading ? <Spinner /> : null}
         <ImportContainer>
            <FormTitle>Pobież wszsytkich studentów</FormTitle>
            <ImportButtonsContainer>
               <ImportButton
                  method={handleGetStudents}
                  buttonTitle="Pobierz studentów"
               />
               {allStudents !== null ? (
                  <Button method={clearTable} buttonTitle="Wyczyść" />
               ) : null}
            </ImportButtonsContainer>
            {allStudents !== null ? (
               <AllStudentsDataTable allStudents={allStudents} />
            ) : null}
         </ImportContainer>
      </>
   )
}
