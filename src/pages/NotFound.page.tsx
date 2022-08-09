import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NotFoundBox } from '../components/NotFound/NotFoundBox/NotFoundBox'

export const NotFoundPage = () => {
   return (
      <>
         <Header />
         <PageContainer style={{ height: '85vh' }}>
            <NotFoundBox description="Page not found" to="/" linkText="home" />
         </PageContainer>
      </>
   )
}
