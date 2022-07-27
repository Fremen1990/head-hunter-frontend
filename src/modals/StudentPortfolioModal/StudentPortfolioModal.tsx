import React, { Dispatch, SetStateAction } from 'react'
import { StudentPortfolio } from '../../components/StudentPortfolio/StudentPortfolio'
import { Header } from '../../components/Header/Header'
import { ModalContainer } from './StudentPortfolioModal.styles'

interface Props {
   changeShowCv: Dispatch<SetStateAction<boolean>>
}

export const StudentPortfolioModal = ({ changeShowCv }: Props) => {
   return (
      <>
         <ModalContainer>
            <Header />
            <StudentPortfolio changeShowCv={changeShowCv} />
         </ModalContainer>
      </>
   )
}
