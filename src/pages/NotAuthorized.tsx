import React from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'
import { NotFound } from '../components/NotFound/NotFound'

export const NotAuthorized = () => (
   <>
      <Header />
      <PageContainer>
         <NotFound
            header="NotAuthorized"
            description="You are not authorized for these content"
            to="/"
            linkText="home"
         />
      </PageContainer>
   </>
)
