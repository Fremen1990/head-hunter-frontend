import React from 'react'
import { OneUser } from '../OneUser/OneUser'
import { studentsInterface } from 'src/pages/Hr.page'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { ResultsContainer } from './UserResultsContainer.styles'

interface Props {
   students: studentsInterface[]
   layout: string
   refreshStudents: () => void
   searchingValue: string
}

export const UserResultsContainer = ({
   layout,
   students,
   refreshStudents,
   searchingValue,
}: Props) => {
   return (
      <ResultsContainer>
         {students
            .filter((item) => {
               return (
                  item.student.firstName
                     .toLowerCase()
                     .includes(searchingValue) ||
                  item.student.lastName.toLowerCase().includes(searchingValue)
               )
            })
            .map((items) => (
               <OneUser
                  layout={layout}
                  key={items.id}
                  student={items}
                  refreshStudents={refreshStudents}
               />
            ))}
      </ResultsContainer>
   )
}
