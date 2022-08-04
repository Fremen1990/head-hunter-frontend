import React from 'react'
import { User } from '../components/AccountProfile/User/User'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'
import { StudentPortfolioModal } from '../modals/StudentPortfolioModal/StudentPortfolioModal'

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
