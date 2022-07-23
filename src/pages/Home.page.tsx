import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/Dashboard/NavBar/Navigation'

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <>
         <PageContainer>
            <Header />
            <NavigationBar />
         </PageContainer>
      </>
   )
}
