import React from 'react'
import { CandidateCv } from '../components/CandidateCv/CandidateCv'
import { Header } from '../components/Header/Header'
import styled from 'styled-components'

export const CandidateCvPage = () => {
   const CandidateContainer = styled.div`
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
   `

   const CandidateCvContainer = styled.div`
      max-width: 1450px;
      margin: 26px;
   `

   return (
      <>
         <Header />
         <CandidateContainer>
            <CandidateCvContainer>
               <CandidateCv />
            </CandidateCvContainer>
         </CandidateContainer>
      </>
   )
}
