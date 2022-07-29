import React, { useState } from 'react'
import {
   ButtonsBox,
   InfoBox,
   MoreInfoBox,
   UserBox,
   UserContainer,
} from './OneUser.styles'
import { Button } from '../../commons/Button/Button'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { InterViewMeBox } from './InterViewMeBox/InterViewMeBox'
import { StudentPortfolioModal } from '../../../modals/StudentPortfolioModal/StudentPortfolioModal'
import { description } from '../../../constants/description/description'

interface Props {
   layout: string
}

export const OneUser = (props: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [showCv, setShowCv] = useState<boolean>(false)

   const text = description.userInterview
   const buttonsName = description.buttons
   const descriptions = description.userInterview

   const showStudentPortfolio = () => {
      setShowCv(true)
   }

   return (
      <>
         {showCv ? (
            <StudentPortfolioModal changeShowCv={setShowCv} />
         ) : (
            <>
               <UserContainer isOpen={isOpen}>
                  <div>
                     {props.layout === 'simple' ? null : (
                        <InfoBox>
                           <p>{text.userReservation}</p>
                           <p>11.07.2022 r</p>
                        </InfoBox>
                     )}
                     <UserBox>
                        {props.layout === 'simple' ? null : (
                           <div className="avatar" />
                        )}
                        <p>Jan kowalski</p>
                     </UserBox>
                  </div>
                  {props.layout === 'simple' ? (
                     <ButtonsBox isOpen={isOpen}>
                        <Button buttonTitle={buttonsName.bookCall} />
                        <AiOutlineCaretDown
                           onClick={() => setIsOpen(!isOpen)}
                        />
                     </ButtonsBox>
                  ) : (
                     <ButtonsBox isOpen={isOpen}>
                        <Button
                           buttonTitle={buttonsName.showCv}
                           method={() => showStudentPortfolio()}
                        />
                        <Button buttonTitle={buttonsName.disinterest} />
                        <Button buttonTitle={buttonsName.hired} />
                        <AiOutlineCaretDown
                           onClick={() => setIsOpen(!isOpen)}
                        />
                     </ButtonsBox>
                  )}
               </UserContainer>
               {isOpen ? (
                  <MoreInfoBox>
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.courseEvaluation}
                        point={'4'}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.activityAssessment}
                        point={'4 '}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.codeEvaluation}
                        point={'5 '}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.scrumAssessment}
                        point={'4'}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.preferWork}
                        point={'WARSZAWA'}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.contractType}
                        point={'Umowa o prace'}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.targetSalary}
                        point={'8000 zł'}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.practice}
                        point={'tak'}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.experience}
                        point={'6 mies'}
                     />
                  </MoreInfoBox>
               ) : null}
            </>
         )}
      </>
   )
}
