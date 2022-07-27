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

export const loremText =
   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n' +
   '                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'

interface Props {
   changeShowCv: (arg: boolean) => void
   student: studentsInterface
}

export const StudentPortfolio = ({ changeShowCv, student }: Props) => {
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
      email,
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
   } = student

   return (
      <UserPortfolioContainer>
         <BackButton onClick={() => changeShowCv(false)}>
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
            <LinksBox text={portfolio} link="https://github.com" />
            <LinksBox text={groupProject} link="https://github.com" />
            <LinksBox link="https://github.com" />
            <LinksBox text={ownProject} link="https://github.com" />
         </MainSection>
      </UserPortfolioContainer>
   )
}
