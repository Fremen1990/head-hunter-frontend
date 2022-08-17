import React from 'react'
import { ResultsBox, ResultsContainer } from './ModalFilterResults.styles'
import { OneUser } from '../../../OneUser/OneUser'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
   filteringUsers: []
   closeModal: (arg: boolean) => void
   refreshStudents: () => void
   layout: string
}

export const ModalFilterResults = ({
   filteringUsers,
   closeModal,
   refreshStudents,
   layout,
}: Props) => {
   return (
      <ResultsContainer>
         <AiOutlineClose
            className={'closeButton'}
            onClick={() => closeModal(false)}
         />
         <ResultsBox>
            {filteringUsers.map((el: any) => (
               <OneUser
                  layout={layout}
                  key={el.student.studentId}
                  student={el}
                  refreshStudents={refreshStudents}
               />
            ))}
         </ResultsBox>
      </ResultsContainer>
   )
}
