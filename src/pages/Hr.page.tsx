import React, { useEffect, useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'
import { SearchFilter } from '../components/Dashboard/SearchFilterBar/SearchFilterForm'
import { getStudents } from '../apiCalls'
import { FilterSection } from '../components/recruiters/FilterSection/FilterSection'
import { useSelector } from 'react-redux'
import { UserState } from '../features/user/userSlice'
import { useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'

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
   // const [students, setStudents] = useState<studentsInterface[]>([])
   const [toInterview, setToInterview] = useState<string>('Dotępni kursanci')

   const { candidates } = useAppSelector((state: RootState) => state.hr)

   console.log('candidates ', candidates)
   // useEffect(() => {
   //    ;(async () => {
   //       const newStudents = await getStudents()
   //       setStudents(newStudents)
   //    })()
   // }, [])

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
                  students={candidates}
               />
            ) : (
               <UserResultsContainer layout={'simple'} students={candidates} />
            )}
         </PageContainer>
      </>
   )
}
