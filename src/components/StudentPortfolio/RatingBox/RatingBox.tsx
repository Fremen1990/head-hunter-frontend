import React from 'react'
import { RatingContainer } from './RatingBox.styles'
import { SubtitlesSection } from '../SubtitlesSection/SubtitlesSection'
import { RatingViewBox } from './RatingViewBox/RatingViewBox'

export const RatingBox = () => {
   return (
      <>
         <SubtitlesSection text="Oceny" />
         <RatingContainer>
            <RatingViewBox rating={3} title="Ocena przejścia kursu" />
            <RatingViewBox
               rating={5}
               title="Ocena aktywności i zaangażowania na kursie"
            />
            <RatingViewBox rating={2} title="Ocena kodu w projekcie własnym" />
            <RatingViewBox rating={4} title="Ocena pracy w zespole w Scrum" />
         </RatingContainer>
      </>
   )
}
