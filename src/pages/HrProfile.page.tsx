import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { Hr } from '../components/AccountProfile/Hr/Hr'

export const HrProfilePage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <Hr />
         </PageContainer>
      </>
   )
}
