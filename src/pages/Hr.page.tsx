import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/recruiters/Navigation/Navigation'
import { UserResultsContainer } from '../components/recruiters/UserResultsContainer/UserResultsContainer'

export const HrPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <NavigationBar />
            <UserResultsContainer />
         </PageContainer>
      </>
   )
}
