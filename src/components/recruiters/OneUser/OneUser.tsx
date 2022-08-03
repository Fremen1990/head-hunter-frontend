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
import { studentsInterface } from 'src/pages/Hr.page'
import { useDispatch } from 'react-redux'
import {
   bookCallCandidate,
   disinterestCandidate,
   HiredCandidate,
} from '../../../features/hr/hrActions'

interface Props {
   layout: string
   student: studentsInterface
}

export const OneUser = ({ layout, student }: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [showCv, setShowCv] = useState<boolean>(false)
   const dispatch = useDispatch()

   const text = description.userInterview
   const buttonsName = description.buttons
   const descriptions = description.userInterview

   const showStudentPortfolio = () => setShowCv(!showCv)
   const handleBookCall = (id: string) => dispatch(bookCallCandidate({ id }))
   const handleDisinterest = (id: string) =>
      dispatch(disinterestCandidate({ id }))
   const handleHired = (id: string) => dispatch(HiredCandidate({ id }))

   return (
      <>
         {showCv ? (
            <StudentPortfolioModal student={student} changeShowCv={setShowCv} />
         ) : (
            <>
               <UserContainer isOpen={isOpen}>
                  <div>
                     {layout === 'simple' ? null : (
                        <InfoBox>
                           <p>{text.userReservation}</p>
                           <p>11.07.2022 r</p>
                        </InfoBox>
                     )}
                     <UserBox>
                        {layout === 'simple' ? null : (
                           <div className="avatar" />
                        )}
                        <p>{student.firstName}</p>

                        {layout === 'simple' ? (
                           <p>{student.lastName.slice(-1)}</p>
                        ) : (
                           <p>{student.lastName}</p>
                        )}
                     </UserBox>
                  </div>
                  {layout === 'simple' ? (
                     <ButtonsBox isOpen={isOpen}>
                        <Button
                           method={() => handleBookCall(student.user.id)}
                           buttonTitle={buttonsName.bookCall}
                        />
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
                        <Button
                           method={() => handleDisinterest(student.user.id)}
                           buttonTitle={buttonsName.disinterest}
                        />
                        <Button
                           method={() => handleHired(student.user.id)}
                           buttonTitle={buttonsName.hired}
                        />
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
                        point={student.courseCompletion}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.activityAssessment}
                        point={student.courseEngagement}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.codeEvaluation}
                        point={student.projectDegree}
                     />
                     <InterViewMeBox
                        ratingBox={true}
                        boxTitle={descriptions.scrumAssessment}
                        point={student.teamProjectDegree}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.preferWork}
                        point={student.targetWorkCity}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.contractType}
                        point={student.expectedContractType}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.targetSalary}
                        point={student.expectedSalary}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.practice}
                        point={student.canTakeApprenticeship}
                     />
                     <InterViewMeBox
                        ratingBox={false}
                        boxTitle={descriptions.experience}
                        point={student.workExperience}
                     />
                  </MoreInfoBox>
               ) : null}
            </>
         )}
      </>
   )
}
