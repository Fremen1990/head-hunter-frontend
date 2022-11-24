import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AsideCandidateCvBox } from './AsideCandidateCvBox/AsideCandidateCvBox'
import { ExpectationCandidateBox } from './ExpectationCandidateBox/ExpectationCandidateBox'
import { LinksBox } from '../studentPortfolio/LinksBox/LinksBox'
import { DescriptionBox } from '../studentPortfolio/DescriptionBox/DescriptionBox'
import { RatingBox } from '../studentPortfolio/RatingBox/RatingBox'
import { description } from '../../constants/description/description'
import { CandidateCvContainer } from './CandidateCv.styles'
import {
   BackIcon,
   BackButton,
   AsideSection,
   MainSection,
} from '../studentPortfolio/StudentPortfolio.styles'
import { UserType } from 'types'

interface Props {
   candidate: UserType
}

export const CandidateCv = ({ candidate }: Props) => {
   const navigate = useNavigate()

   const {
      backFromModal,
      educationDescribe,
      coursesDescribe,
      experienceDescribe,
      portfolio,
      groupProject,
      ownProject,
   } = description.studentPortfolio

   const {
      firstName,
      lastName,
      githubUserName,
      tel,
      bio,
      courseCompletion,
      courseEngagement,
      projectDegree,
      teamProjectDegree,
      expectedContractType,
      targetWorkCity,
      expectedSalary,
      canTakeApprenticeship,
      monthsOfCommercialExp,
      expectedTypeOfWork,
      education,
      courses,
      workExperience,
      portfolioUrls,
      bonusProjectUrls,
      projectUrls,
   } = candidate.student

   const { email } = candidate

   return (
      <CandidateCvContainer>
         <BackButton onClick={() => navigate(-1)}>
            <BackIcon />
            {backFromModal}
         </BackButton>
         <AsideSection>
            <AsideCandidateCvBox
               firstName={firstName}
               lastName={lastName}
               githubNick={githubUserName}
               phone={tel}
               email={email}
               desc={bio}
            />
         </AsideSection>
         <MainSection>
            <RatingBox
               ratingStars={[
                  courseCompletion,
                  courseEngagement,
                  projectDegree,
                  teamProjectDegree,
               ]}
            />
            <ExpectationCandidateBox
               expectedContractType={expectedContractType}
               targetWorkCity={targetWorkCity}
               expectedSalary={expectedSalary}
               canTakeApprenticeship={canTakeApprenticeship}
               monthsOfCommercialExp={monthsOfCommercialExp}
               expectedTypeOfWork={expectedTypeOfWork}
            />
            <DescriptionBox text={educationDescribe} desc={education} />
            <DescriptionBox text={coursesDescribe} desc={courses} />
            <DescriptionBox text={experienceDescribe} desc={workExperience} />
            <LinksBox text={portfolio} link={portfolioUrls} />
            <LinksBox text={groupProject} link={bonusProjectUrls} />
            <LinksBox text={ownProject} link={projectUrls} />
         </MainSection>
      </CandidateCvContainer>
   )
}
