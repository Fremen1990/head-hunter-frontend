import React, { useEffect } from 'react'
import { OneUser } from '../OneUser/OneUser'
import { studentsInterface } from 'src/pages/Hr.page'
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'
import { fetchHrCandidates } from '../../../features/hr/hrActions'
// eslint-disable-next-line no-unused-vars
import { UserState } from '../../../features/user/userSlice'

interface Props {
   students: studentsInterface[]
   layout: string
}

export const UserResultsContainer = ({ students, layout }: Props) => {
   const { candidates } = useSelector((state: UserState) => state.hr)
   console.log('CANDI', candidates)
   const dispatch = useDispatch()

   useEffect(() => {
      // @ts-ignore
      dispatch(fetchHrCandidates())
   }, [])

   return (
      <>
         {students.map((student: studentsInterface) => (
            <OneUser layout={layout} key={student.id} student={student} />
         ))}
      </>
   )
}
