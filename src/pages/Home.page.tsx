import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { StudentsNavigation } from '../components/Dashboard/Navigation/Navigation'
import { SearchFilter } from '../components/Dashboard/SearchFilterForm/SearchFilterForm'

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <>
         <PageContainer>
            <Header />
            <StudentsNavigation />
            <SearchFilter />
         </PageContainer>
      </>
   )
}
