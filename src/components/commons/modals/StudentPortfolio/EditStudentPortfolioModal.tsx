import React from 'react'
import { ModalContainer } from './StudentPortfolioModal.styles'
import { Header } from '../../../Header/Header'
import { EditStudentPortfolio } from '../../../editStudentPortfolio/EditStudentPortfolio'

export const EditStudentPortfolioModal = () => {
   return (
      <ModalContainer>
         <Header />
         <EditStudentPortfolio />
      </ModalContainer>
   )
}
