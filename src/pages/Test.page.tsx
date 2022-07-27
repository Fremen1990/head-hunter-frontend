import React, { useState } from 'react'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'
import { Filtering } from '../components/recruiters/Filtering/Filtering'

export const TestPage = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
         <Header />
         <PageContainer>
            <h1> TEST PAGE </h1>
            <button onClick={() => setIsOpen(!isOpen)}>Filtering</button>
            {isOpen && <Filtering hiddenModal={() => setIsOpen(!isOpen)} />}
         </PageContainer>
      </>
   )
}
