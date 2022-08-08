import React from 'react'
import {
   AsideSection,
   BackButton,
   BackIcon,
   MainSection,
   UserPortfolioContainer,
} from './StudentPortfolio.styles'
import { LinksBox } from './LinksBox/LinksBox'
import { AsideUserBox } from './AsideUserBox/AsideUserBox'
import { DescriptionBox } from './DescriptionBox/DescriptionBox'
import { RatingBox } from './RatingBox/RatingBox'
import { ExpectationBox } from './ExpectationBox/ExpectationBox'
import { description } from '../../constants/description/description'
import { studentsInterface } from 'src/pages/Hr.page'
import { useNavigate } from 'react-router-dom'

interface Props {
   changeShowCv: (arg: boolean) => void | boolean
   student: studentsInterface
   email: string
}

export const StudentPortfolio = ({
   changeShowCv = true,
   student,
   email,
}: Props) => {
   const navigate = useNavigate()

   const {
      educationDescribe,
      coursesDescribe,
      experienceDescribe,
      portfolio,
      groupProject,
      ownProject,
      backFromModal,
   } = description.studentPortfolio

   const {
      firstName,
      tel,
      // email,
      githubUserName,
      lastName,
      bio,
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
      projectUrls,
      bonusProjectUrls,
   } = student

   return (
      <UserPortfolioContainer>
         <BackButton
            // onClick={() => changeShowCv(false)}
            onClick={() => navigate(-1)}
         >
            <BackIcon />
            {backFromModal}
         </BackButton>
         <AsideSection>
            <AsideUserBox
               firstName={firstName}
               lastName={lastName}
               githubNick={githubUserName}
               phone={tel}
               email={email}
               desc={bio}
            />
         </AsideSection>
         <MainSection>
            <RatingBox />
            <ExpectationBox
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
      </UserPortfolioContainer>
   )
}
