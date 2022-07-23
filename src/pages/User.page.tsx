import React from 'react'
import { User } from '../components/AccountProfile/User/User'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'

export const UserPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <User />
         </PageContainer>
      </>
   )
}
