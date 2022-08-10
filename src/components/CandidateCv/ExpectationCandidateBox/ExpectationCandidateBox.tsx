import React from 'react'
import { ExpectationSection } from './ExpectationCandidateBox.styles'
import { SubtitlesCandidateSection } from '../SubtitlesCandidateSection/SubtitlesCandidateSection'
import { InterViewMeBox } from '../../recruiters/OneUser/InterViewMeBox/InterViewMeBox'
import { description } from '../../../constants/description/description'

export const ExpectationCandidateBox = () => {
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
         <SubtitlesCandidateSection />
         <ExpectationSection>
            <InterViewMeBox
               ratingBox={false}
               boxTitle={preferWork}
               point="biuro"
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetPlace}
               point="poznan"
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={contractType}
               point="umowa o prace"
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetSalary}
               point="2000"
            />
            <InterViewMeBox ratingBox={false} boxTitle={practice} point="tak" />
            <InterViewMeBox ratingBox={false} boxTitle={experience} point="5" />
         </ExpectationSection>
      </>
   )
}
