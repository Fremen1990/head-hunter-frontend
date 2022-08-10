import React from 'react'
import { User } from '../components/AccountProfile/User/User'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'

export const UserPage = () => (
   <>
      <Header />
      <PageContainer>
         <User />
      </PageContainer>
   </>
)
