import React from 'react'
import { BoxContainer } from './InterViewMeBox.styles'
import { description } from '../../../../constants/description/description'

interface Props {
   boxTitle: string
   point: string
   ratingBox: boolean
}

export const InterViewMeBox = ({ ratingBox, point, boxTitle }: Props) => {
   let pointResponse = ''
   if (!ratingBox) {
      switch (point) {
         case 'office':
            pointResponse = description.studentPortfolio.office
            break
         case 'ready_to_move':
            pointResponse = description.studentPortfolio.ready_to_move
            break
         case 'remote':
            pointResponse = description.studentPortfolio.remote
            break
         case 'hybrid':
            pointResponse = description.studentPortfolio.hybrid
            break
         case 'any':
            pointResponse = description.studentPortfolio.any
            break
         case 'uop':
            pointResponse = description.studentPortfolio.uop
            break
         case 'b2b':
            pointResponse = description.studentPortfolio.b2b
            break
         case 'uz_uod':
            pointResponse = description.studentPortfolio.uz_uod
            break
         case 'yes':
            pointResponse = description.studentPortfolio.yes
            break
         case 'no':
            pointResponse = description.studentPortfolio.no
            break
         default:
            pointResponse = point
      }
   }

   return (
      <BoxContainer>
         <p>{boxTitle}</p>
         {ratingBox ? (
            <p>
               <span>{point}</span> / 5
            </p>
         ) : (
            <p>
               <span>{pointResponse}</span>
            </p>
         )}
      </BoxContainer>
   )
}
