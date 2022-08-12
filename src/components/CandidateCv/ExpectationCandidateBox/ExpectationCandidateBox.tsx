import React from 'react'
import { InterViewMeBox } from '../../recruiters/OneUser/InterViewMeBox/InterViewMeBox'
import { SubtitlesSection } from '../../studentPortfolio/SubtitlesSection/SubtitlesSection'
import { description } from '../../../constants/description/description'
import { ExpectationSection } from '../../studentPortfolio/ExpectationBox/ExpectationBox.styles'

interface Props {
   expectedContractType: string
   targetWorkCity: string
   expectedSalary: string
   canTakeApprenticeship: string
   monthsOfCommercialExp: number
   expectedTypeOfWork: string
}

export const ExpectationCandidateBox = ({
   expectedContractType,
   targetWorkCity,
   expectedTypeOfWork,
   monthsOfCommercialExp,
   canTakeApprenticeship,
   expectedSalary,
}: Props) => {
   const { expectation } = description.studentPortfolio

   const {
      preferWork,
      targetPlace,
      contractType,
      targetSalary,
      practice,
      experience,
   } = description.userInterview

   return (
      <>
         <SubtitlesSection text={expectation} />
         <ExpectationSection>
            <InterViewMeBox
               ratingBox={false}
               boxTitle={preferWork}
               point={expectedTypeOfWork}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetPlace}
               point={targetWorkCity}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={contractType}
               point={expectedContractType}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetSalary}
               point={expectedSalary}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={practice}
               point={canTakeApprenticeship}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={experience}
               point={String(monthsOfCommercialExp)}
            />
         </ExpectationSection>
      </>
   )
}
