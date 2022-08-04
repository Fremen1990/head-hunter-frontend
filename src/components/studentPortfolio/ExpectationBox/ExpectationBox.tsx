import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { InterViewMeBox } from '../../recruiters/OneUser/InterViewMeBox/InterViewMeBox'
import { description } from '../../../constants/description/description'
import { ExpectationSection } from './ExpectationBox.styles'

interface Props {
   expectedContractType: string
   targetWorkCity: string
   expectedSalary: string
   canTakeApprenticeship: string
   monthsOfCommercialExp: string
   expectedTypeOfWork: string
}

export const ExpectationBox = ({
   expectedContractType,
   targetWorkCity,
   expectedTypeOfWork,
   monthsOfCommercialExp,
   canTakeApprenticeship,
   expectedSalary,
}: Props) => {
   const {
      preferWork,
      targetPlace,
      contractType,
      targetSalary,
      practice,
      experience,
   } = description.userInterview
   const { expectation } = description.studentPortfolio

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
               point={monthsOfCommercialExp}
            />
         </ExpectationSection>
      </>
   )
}
