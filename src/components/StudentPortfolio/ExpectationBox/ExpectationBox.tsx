import React from 'react'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { InterViewMeBox } from '../../recruiters/OneUser/InterViewMeBox/InterViewMeBox'
import { description } from '../../../constants/description/description'
import { ExpectationSection } from './ExpectationBox.styles'

export const ExpectationBox = () => {
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
               point={'Biuro'}
            />

            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetPlace}
               point={'WARSZAWA'}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={contractType}
               point={'Umowa o prace'}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={targetSalary}
               point={'8000 zł'}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={practice}
               point={'tak'}
            />
            <InterViewMeBox
               ratingBox={false}
               boxTitle={experience}
               point={'6 mies'}
            />
         </ExpectationSection>
      </>
   )
}
