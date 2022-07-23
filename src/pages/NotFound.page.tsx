import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NotFound } from '../components/NotFound/NotFound'

export const NotFoundPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <NotFound />
         </PageContainer>
      </>
   )
}
