import React, { useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'

import { Admin } from '../components/AccountProfile/Admin/Admin'

export const AdminPage = () => {
   return (
      <>
         <Header />
         <PageContainer>
            <Admin />
         </PageContainer>
      </>
   )
}

