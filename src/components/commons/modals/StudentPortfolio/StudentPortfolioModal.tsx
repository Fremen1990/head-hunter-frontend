import React, { Dispatch, SetStateAction } from 'react'
import { StudentPortfolio } from '../../../studentPortfolio/StudentPortfolio'
import { Header } from '../../../Header/Header'
import { ModalContainer } from './StudentPortfolioModal.styles'
import { studentsInterface } from '../../../../pages/Hr.page'
import { useAppSelector } from '../../../../app/hooks'
import { RootState } from '../../../../app/store'

interface Props {
   changeShowCv: Dispatch<SetStateAction<boolean>>
   student: studentsInterface
}

export const StudentPortfolioModal = ({ changeShowCv, student }: Props) => {
   const currentUserPortfolio = useAppSelector(
      (state: RootState) => state.user.userDetails
   )

   return (
      <>
         <ModalContainer>
            <Header />
            <StudentPortfolio
               student={currentUserPortfolio}
               changeShowCv={changeShowCv}
            />
         </ModalContainer>
      </>
   )
}
