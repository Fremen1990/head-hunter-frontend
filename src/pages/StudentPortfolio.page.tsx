import React from 'react'
import { Header } from '../components/Header/Header'
import styled from 'styled-components'
import { StudentPortfolio } from '../components/studentPortfolio/StudentPortfolio'
import { useAppSelector } from '../app/hooks'
import { UserState } from '../features/user/userSlice'

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

export const StudentPortfolioPage = () => {
   const { userDetails, email } = useAppSelector(
      (state: UserState) => state.user
   )
   return (
      <>
         <Header />
         <PortfolioContainer>
            <StudentPortfolioContainer>
               <StudentPortfolio student={userDetails} email={email} />
            </StudentPortfolioContainer>
         </PortfolioContainer>
      </>
   )
}
