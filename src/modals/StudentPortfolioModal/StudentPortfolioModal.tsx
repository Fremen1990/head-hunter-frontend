import React, { Dispatch, SetStateAction } from 'react'
import { StudentPortfolio } from '../../components/StudentPortfolio/StudentPortfolio'
import { Header } from '../../components/Header/Header'
import { ModalContainer } from './StudentPortfolioModal.styles'
import { studentsInterface } from '../../pages/Hr.page'
import { useAppSelector } from '../../app/hooks'
import { UserState } from '../../features/user/userSlice'

interface Props {
   changeShowCv: Dispatch<SetStateAction<boolean>>
   student: studentsInterface
}

export const StudentPortfolioModal = ({ changeShowCv, student }: Props) => {
   const currentUserPortfolio = useAppSelector(
      (state: UserState) => state.user.userDetails
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
