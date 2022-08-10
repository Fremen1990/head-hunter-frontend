import React, { useState } from 'react'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Header } from '../components/Header/Header'

import { Admin } from '../components/AccountProfile/Admin/Admin'

// eslint-disable-next-line no-unused-vars
import {
   getStudents,
   importStudentsCall,
   uploadFileCall,
   importHrCall,
   getHr,
} from '../apiCalls'
import ReactJson from 'react-json-view'
import styled from 'styled-components'

export const AdminPage = () => (
   <>
      <Header />
      <PageContainer>
         <Admin />
      </PageContainer>
   </>
)
