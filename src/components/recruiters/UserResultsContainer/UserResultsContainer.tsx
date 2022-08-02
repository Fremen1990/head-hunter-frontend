import React, { useEffect } from 'react'
import { OneUser } from '../OneUser/OneUser'
import { studentsInterface } from 'src/pages/Hr.page'
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'
import { fetchHrCandidates } from '../../../features/hr/hrActions'
// eslint-disable-next-line no-unused-vars
import { UserState } from '../../../features/user/userSlice'
import { ResultsContainer } from './UserResultsContainer.styles'

interface Props {
   students: studentsInterface[]
   layout: string
}

export const UserResultsContainer = ({ layout }: Props) => {
   const { candidates } = useSelector((state: UserState) => state.hr)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchHrCandidates())
   }, [])

   return (
      <ResultsContainer>
         {candidates.map((student: studentsInterface) => (
            <OneUser layout={layout} key={student.id} student={student} />
         ))}
      </ResultsContainer>
   )
}
