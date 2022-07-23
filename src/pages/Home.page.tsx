import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/Dashboard/Navigation/Navigation'

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <>
         <PageContainer>
            <Header />
            <NavBar />
         </PageContainer>
      </>
   )
}
