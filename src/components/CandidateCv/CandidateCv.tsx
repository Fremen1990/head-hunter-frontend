import React from 'react'
import {
   AsideSection,
   BackButton,
   BackIcon,
   CandidateCvContainer,
   MainSection,
} from './CandidateCv.styles'
import { useNavigate } from 'react-router-dom'
import { description } from '../../constants/description/description'
import { AsideCandidateCvBox } from './AsideCandidateCvBox/AsideCandidateCvBox'
import { DescriptionCandidateCvBox } from './DescriptionCandidateCvBox/DescriptionCandidateCvBox'
import { RatingCandidateCvBox } from './RatingCandidateCvBox/RatingCandidateCvBox'
import { ExpectationCandidateBox } from './ExpectationCandidateBox/ExpectationCandidateBox'
import { LinksCandidateBox } from './LinksCadidateBox/LinksCandidateBox'

interface Props {
   candidate: any
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
            <RatingCandidateCvBox
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
            <DescriptionCandidateCvBox
               text={educationDescribe}
               desc={education}
            />
            <DescriptionCandidateCvBox text={coursesDescribe} desc={courses} />
            <DescriptionCandidateCvBox
               text={experienceDescribe}
               desc={workExperience}
            />
            <LinksCandidateBox text={portfolio} link={portfolioUrls} />
            <LinksCandidateBox text={groupProject} link={bonusProjectUrls} />
            <LinksCandidateBox text={ownProject} link={projectUrls} />
         </MainSection>
      </CandidateCvContainer>
   )
}
