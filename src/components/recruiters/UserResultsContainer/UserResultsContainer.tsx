import React, { useEffect } from 'react'
import { OneUser } from '../OneUser/OneUser'
import { studentsInterface } from 'src/pages/Hr.page'
// eslint-disable-next-line no-unused-vars
import { useDispatch } from 'react-redux'
import { fetchHrCandidates } from '../../../features/hr/hrActions'
// eslint-disable-next-line no-unused-vars
import { ResultsContainer } from './UserResultsContainer.styles'

interface Props {
   students: studentsInterface[]
   layout: string
}

export const UserResultsContainer = ({ layout, students }: Props) => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchHrCandidates())
   }, [])

   return (
      <ResultsContainer>
         {students.map((student: studentsInterface) => (
            <OneUser layout={layout} key={student.id} student={student} />
         ))}
      </ResultsContainer>
   )
}
