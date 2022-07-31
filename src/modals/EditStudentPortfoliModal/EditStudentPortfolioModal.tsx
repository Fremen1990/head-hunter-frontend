import React from 'react'
import { ModalContainer } from '../StudentPortfolioModal/StudentPortfolioModal.styles'
import { Header } from '../../components/Header/Header'
import { EditStudentPortfolio } from '../../components/EditStudentPortfolio/EditStudentPortfolio'

export const EditStudentPortfolioModal = () => {
   return (
      <ModalContainer>
         <Header />
         <EditStudentPortfolio />
      </ModalContainer>
   )
}
