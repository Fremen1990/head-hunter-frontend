import React from 'react'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'

export const TestPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <h1> TEST PAGE </h1>
         </PageContainer>
      </>
   )
}
