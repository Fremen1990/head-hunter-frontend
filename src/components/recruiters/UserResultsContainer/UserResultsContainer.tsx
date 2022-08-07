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
}

export const UserResultsContainer = ({
   layout,
   students,
   refreshStudents,
}: Props) => {
   return (
      <ResultsContainer>
         {students.map((student: studentsInterface) => (
            <OneUser
               layout={layout}
               key={student.id}
               student={student.student}
               refreshStudents={refreshStudents}
            />
         ))}
      </ResultsContainer>
   )
}
