import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { StudentsNavigation } from '../components/Dashboard/Students'

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = () => {
   return (
      <>
         <PageContainer>
            <Header />
            <StudentsNavigation />
         </PageContainer>
      </>
   )
}
