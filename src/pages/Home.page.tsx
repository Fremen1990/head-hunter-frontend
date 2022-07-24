import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NavigationBar } from '../components/Dashboard/Navigation/Navigation'
import { SearchFilter } from '../components/Dashboard/SearchFilterBar/SearchFilterForm'

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <>
         <PageContainer>
            <Header />
            <NavigationBar />
            <SearchFilter />
         </PageContainer>
      </>
   )
}
