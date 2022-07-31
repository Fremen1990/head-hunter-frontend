import React, { useEffect, useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { StudentsNavigation } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'
import { getStudents } from '../apiCalls'

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

// to remove later
const availableStudents: studentsInterface[] = [
   {
      id: 'andrzej',
      email: 'email@casc.pl',
      studentStatus: 'string',
      courseCompletion: 2,
      courseEngagement: 2,
      projectDegree: 2,
      teamProjectDegree: 3,
      bonusProjectUrls: ['string[]'],
      tel: '23432',
      firstName: 'Alicja',
      lastName: 'Zamachowska',
      githubUserName: 'string',
      portfolioUrls: 'string',
      projectUrls: 'string',
      bio: 'string',
      expectedTypeOfWork: 'string',
      targetWorkCity: 'string',
      expectedContractType: 'string',
      expectedSalary: 'string',
      canTakeApprenticeship: 'string',
      monthsOfCommercialExp: 'string',
      education: 'string',
      workExperience: 'string',
      courses: 'string',
   },
   {
      id: '324wasdasdas',
      email: 'email@casc.pl',
      studentStatus: 'string',
      courseCompletion: 2,
      courseEngagement: 2,
      projectDegree: 2,
      teamProjectDegree: 3,
      bonusProjectUrls: ['string[]'],
      tel: '23432',
      firstName: 'Roman',
      lastName: 'Walidowski',
      githubUserName: 'string',
      portfolioUrls: 'string',
      projectUrls: 'string',
      bio: 'string',
      expectedTypeOfWork: 'string',
      targetWorkCity: 'string',
      expectedContractType: 'string',
      expectedSalary: 'string',
      canTakeApprenticeship: 'string',
      monthsOfCommercialExp: 'string',
      education: 'string',
      workExperience: 'string',
      courses: 'string',
   },
]

export const HrPage = () => {
   const [students, setStudents] = useState<studentsInterface[]>([])
   const [toInterview, setToInterview] = useState<boolean>(false)

   useEffect(() => {
      ;(async () => {
         const newStudents = await getStudents()
         setStudents(newStudents)
      })()
   }, [])

   return (
      <>
         <Header />
         <PageContainer>
            <StudentsNavigation setToInterview={setToInterview} />
            {toInterview ? (
               <UserResultsContainer layout={'extened'} students={students} />
            ) : (
               <UserResultsContainer
                  layout={'simple'}
                  students={availableStudents}
               />
            )}
         </PageContainer>
      </>
   )
}
