import React, { useEffect, useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'
import { FilterSection } from '../components/recruiters/FilterSection/FilterSection'
import { useDispatch } from 'react-redux'
import { UserState } from '../features/user/userSlice'
import { useAppSelector } from '../app/hooks'
import { fetchHrCandidates } from '../features/hr/hrActions'

// to remove later
export interface studentsInterface {
   id: string
   email: string
   studentStatus: string
   courseCompletion: number
   courseEngagement: number
   projectDegree: number
   teamProjectDegree: number
   bonusProjectUrls: string[]
   tel: string
   firstName: string
   lastName: string
   githubUserName: string
   portfolioUrls: string
   projectUrls: string
   bio: string
   expectedTypeOfWork: string
   targetWorkCity: string
   expectedContractType: string
   expectedSalary: string
   canTakeApprenticeship: string
   monthsOfCommercialExp: string
   education: string
   workExperience: string
   courses: string
   created_at?: Date
   updated_at?: Date
}

export const HrPage = () => {
   const [students, setStudents] = useState<studentsInterface[]>([])
   const [interviewStudents, setInterviewStudents] = useState<
      studentsInterface[]
   >([])
   const [toInterview, setToInterview] = useState<string>('Dotępni kursanci')
   const dispatch = useDispatch()
   const { candidates } = useAppSelector((state: UserState) => state.hr)

   useEffect(() => {
      setStudents(candidates)
   }, [])

   useEffect(() => {
      ;(async () => {
         // @ts-ignore
         const newInterviewStudents = students.filter(
            (user) => user.student.studentStatus === 'interview'
         )
         setInterviewStudents(newInterviewStudents)
         dispatch(fetchHrCandidates())
      })()
   }, [toInterview])

   return (
      <>
         <Header />
         <PageContainer>
            <NavigationBar setToInterview={setToInterview} />
            {/* <SearchFilter /> */}
            <FilterSection />
            {toInterview === 'Do rozmowy' ? (
               <UserResultsContainer
                  layout={'extended'}
                  students={interviewStudents}
               />
            ) : (
               <UserResultsContainer layout={'simple'} students={students} />
            )}
         </PageContainer>
      </>
   )
}
