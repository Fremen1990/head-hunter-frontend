import React, { useState } from 'react'
import {
   ImportButton,
   ImportButtonsContainer,
   ImportContainer,
} from '../ImportStudents/ImportStudents.styles'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import { AllHrDataTable } from './AllHrDataTable'
import { Button } from '../../../commons/Button/Button'
import { Spinner } from '../../../commons/Spinner/Spinner'
import { getHr } from '../../../../apiCalls'
import { toast } from 'react-toastify'

export const GetAllHr = () => {
   const [allHr, setAllHr] = useState(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const handleGetHr = async () => {
      await setIsLoading(true)
      const allHr = await getHr()
      await setAllHr(allHr)
      await setIsLoading(false)
      await toast.success('HR pobrane!')
   }
   const clearTable = async () => {
      await setAllHr(null)
   }

   return (
      <>
         {isLoading ? <Spinner /> : null}
         <ImportContainer>
            <FormTitle>Pobież wszsytkich HR</FormTitle>
            <ImportButtonsContainer>
               <ImportButton method={handleGetHr} buttonTitle="Pobierz HR" />
               {allHr !== null ? (
                  <Button method={clearTable} buttonTitle="Wyczyść" />
               ) : null}
            </ImportButtonsContainer>
            {allHr !== null ? <AllHrDataTable allHr={allHr} /> : null}
         </ImportContainer>
      </>
   )
}
