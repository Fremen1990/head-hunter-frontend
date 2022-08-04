import React from 'react'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'
import { StudentPortfolioModal } from '../components/commons/modals/StudentPortfolio/StudentPortfolioModal'

export const StudentPortfolioPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <StudentPortfolioModal />
         </PageContainer>
      </>
   )
}
