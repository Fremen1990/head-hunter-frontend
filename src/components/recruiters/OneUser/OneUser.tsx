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
import { StudentPortfolioModal } from '../../commons/modals/StudentPortfolio/StudentPortfolioModal'
import { description } from '../../../constants/description/description'
import { studentsInterface } from 'src/pages/Hr.page'
import { useDispatch } from 'react-redux'
import {
   bookCallCandidate,
   disinterestCandidate,
   HiredCandidate,
} from '../../../features/hr/hrActions'
import { useAppSelector } from '../../../app/hooks'

interface Props {
   layout: string
   student: studentsInterface
   refreshStudents: () => void
}

export const OneUser = ({ layout, student, refreshStudents }: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [showCv, setShowCv] = useState<boolean>(false)
   const dispatch = useDispatch()
   const text = description.userInterview
   const buttonsName = description.buttons
   const descriptions = description.userInterview
   const { isFetching } = useAppSelector((state) => state.hr)

   const showStudentPortfolio = () => setShowCv(!showCv)
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
                     <p>{student.date}</p>
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
                  <p>{student.student.firstName}</p>

                  {layout === 'simple' ? (
                     <p>{student.student.lastName?.slice(-1)}</p>
                  ) : (
                     <p>{student.student.lastName}</p>
                  )}
               </UserBox>
            </div>
            {layout === 'simple' ? (
               <ButtonsBox isOpen={isOpen}>
                  <Button
                     method={() => handleBookCall(student.student.studentId)}
                     buttonTitle={buttonsName.bookCall}
                  />
                  <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
               </ButtonsBox>
            ) : (
               <ButtonsBox isOpen={isOpen}>
                  <Button
                     buttonTitle={buttonsName.showCv}
                     method={() => showStudentPortfolio()}
                  />
                  <Button
                     method={() => handleDisinterest(student.student.studentId)}
                     buttonTitle={buttonsName.disinterest}
                  />
                  <Button
                     method={() => handleHired(student.student.studentId)}
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
                  point={student.student.courseCompletion}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.activityAssessment}
                  point={student.student.courseEngagement}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.codeEvaluation}
                  point={student.student.projectDegree}
               />
               <InterViewMeBox
                  ratingBox={true}
                  boxTitle={descriptions.scrumAssessment}
                  point={student.student.teamProjectDegree}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.preferWork}
                  point={student.student.targetWorkCity}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.contractType}
                  point={student.student.expectedContractType}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.targetSalary}
                  point={student.student.expectedSalary}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.practice}
                  point={student.student.canTakeApprenticeship}
               />
               <InterViewMeBox
                  ratingBox={false}
                  boxTitle={descriptions.experience}
                  point={student.student.workExperience}
               />
            </MoreInfoBox>
         ) : null}
      </>
   )
}
