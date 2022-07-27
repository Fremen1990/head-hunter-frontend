import React from 'react'
import { OneUser } from '../OneUser/OneUser'
import { studentsInterface } from 'src/pages/Hr.page'

interface Props {
   students: studentsInterface[]
   layout: string
}

export const UserResultsContainer = ({ students, layout }: Props) => {
   return (
      <>
         {students.map((student: studentsInterface) => (
            <OneUser layout={layout} key={student.id} student={student} />
         ))}
      </>
   )
}
