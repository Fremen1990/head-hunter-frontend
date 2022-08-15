import React, { useState } from 'react'
import {
   ButtonsBox,
   InfoBox,
   MoreInfoBox,
   ShowCvLink,
   UserBox,
   UserContainer,
} from './OneUser.styles'
import { Button } from '../../commons/Button/Button'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { InterViewMeBox } from './InterViewMeBox/InterViewMeBox'
import { StudentPortfolioModal } from '../../commons/modals/StudentPortfolio/StudentPortfolioModal'
import { description } from '../../../constants/description/description'
import { useDispatch } from 'react-redux'
import {
   bookCallCandidate,
   disinterestCandidate,
   HiredCandidate,
} from '../../../features/hr/hrActions'

interface Props {
   layout: string
   student: []
   refreshStudents: () => void
}

export const OneUser = ({ layout, student, refreshStudents }: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [showCv, setShowCv] = useState<boolean>(false)
   const dispatch = useDispatch()
   const text = description.userInterview
   const buttonsName = description.buttons
   const descriptions = description.userInterview

   const handleBookCall = async (studentId: string) => {
      try {
         await dispatch(bookCallCandidate({ studentId }))
      } finally {
         await refreshStudents()
      }
   }

   const handleDisinterest = async (studentId: string) => {
      try {
         await dispatch(disinterestCandidate({ studentId }))
      } finally {
         await refreshStudents()
      }
   }

   const handleHired = async (studentId: string) => {
      try {
         await dispatch(HiredCandidate({ studentId }))
      } finally {
         await refreshStudents()
      }
   }

   const { date } = student
   const {
      firstName,
      lastName,
      courseCompletion,
      courseEngagement,
      projectDegree,
      teamProjectDegree,
      targetWorkCity,
      expectedContractType,
      expectedSalary,
      workExperience,
      canTakeApprenticeship,
      studentId,
   } = student.student
   return (
      <>
         <UserContainer isOpen={isOpen}>
            {showCv ? (
               <StudentPortfolioModal
                  changeShowCv={setShowCv}
                  student={student}
               />
            ) : null}
            <div>
               {layout === 'simple' ? null : (
                  <InfoBox>
                     <p>{text.userReservation}</p>
                     <p>{date}</p>
                  </InfoBox>
               )}
               <UserBox>
                  {layout === 'simple' ? null : (
                     <div className="avatar">
                        <img
                           src={
                              student.student?.githubUserName
                                 ? `https://avatars.githubusercontent.com/${student.student.githubUserName}`
                                 : '/assets/default_avatar/GHLogo.png'
                           }
                           alt="gitHub avatar"
                        />
                     </div>
                  )}
                  <p>{firstName}</p>

                  {layout === 'simple' ? (
                     <p>{lastName?.slice(-1)}</p>
                  ) : (
                     <p>{lastName}</p>
                  )}
               </UserBox>
            </div>
            {layout === 'simple' ? (
               <ButtonsBox isOpen={isOpen}>
                  <Button
                     method={() => handleBookCall(studentId)}
                     buttonTitle={buttonsName.bookCall}
                  />
                  <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
               </ButtonsBox>
            ) : (
               <ButtonsBox isOpen={isOpen}>
                  <ShowCvLink to={`candidate/${student.studentId}`}>
                     {buttonsName.showCv}
                  </ShowCvLink>
                  <Button
                     method={() => handleDisinterest(studentId)}
                     buttonTitle={buttonsName.disinterest}
                  />
                  <Button
                     method={() => handleHired(studentId)}
                     buttonTitle={buttonsName.hired}
                  />
                  <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
               </ButtonsBox>
            )}
         </UserContainer>
         {isOpen ? (
            <MoreInfoBox>
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.courseEvaluation}
                  point={courseCompletion}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.activityAssessment}
                  point={courseEngagement}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.codeEvaluation}
                  point={projectDegree}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.scrumAssessment}
                  point={teamProjectDegree}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.preferWork}
                  point={targetWorkCity}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.contractType}
                  point={expectedContractType}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.targetSalary}
                  point={expectedSalary}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.practice}
                  point={canTakeApprenticeship}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.experience}
                  point={workExperience}
               />
            </MoreInfoBox>
         ) : null}
      </>
   )
}
