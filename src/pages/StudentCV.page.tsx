import React from 'react'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'
import { StudentPortfolio } from '../components/StudentPortfolio/StudentPortfolio'

export const StudentCVPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <StudentPortfolio />
         </PageContainer>
      </>
   )
}
