import React, { Dispatch, SetStateAction } from 'react'
import { StudentPortfolio } from '../../components/StudentPortfolio/StudentPortfolio'
import { Header } from '../../components/Header/Header'
import { ModalContainer } from './StudentPortfolioModal.styles'
import { studentsInterface } from '../../pages/Hr.page'

interface Props {
   changeShowCv: Dispatch<SetStateAction<boolean>>
   student: studentsInterface
}

export const StudentPortfolioModal = ({ changeShowCv, student }: Props) => {
   return (
      <>
         <ModalContainer>
            <Header />
            <StudentPortfolio student={student} changeShowCv={changeShowCv} />
         </ModalContainer>
      </>
   )
}
