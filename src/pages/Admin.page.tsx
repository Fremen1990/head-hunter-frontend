import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { OneUser } from '../components/Dashboard/OneUser/OneUser'

export const AdminPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <h1>Admin Page</h1>
            <p>
               For example how to use page container with header component :)
            </p>
            <OneUser />
         </PageContainer>
      </>
   )
}
