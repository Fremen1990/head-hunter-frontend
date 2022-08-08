import React from 'react'
import { Header } from '../components/Header/Header'
import styled from 'styled-components'
import { EditStudentPortfolioModal } from '../components/commons/modals/StudentPortfolio/EditStudentPortfolioModal'

const PortfolioContainer = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: center;
`

const StudentPortfolioContainer = styled.div`
   max-width: 1450px;
   margin: 26px;
`

export const StudentPortfolioEditPage = () => {
   return (
      <>
         <Header />
         <PortfolioContainer>
            <StudentPortfolioContainer>
               <EditStudentPortfolioModal />
            </StudentPortfolioContainer>
         </PortfolioContainer>
      </>
   )
}
