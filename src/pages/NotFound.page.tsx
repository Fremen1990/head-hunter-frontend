import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NotFound } from '../components/NotFound/NotFound'

export const NotFoundPage = () => (
   <>
      <Header />
      <PageContainer>
         <NotFound
            header="404"
            description="Not found page"
            to="/"
            linkText="home"
         />
      </PageContainer>
   </>
)
