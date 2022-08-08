import React from 'react'
import { BoxContainer } from './InterViewMeBox.styles'
import { description } from '../../../../constants/description/description'

interface Props {
   boxTitle: string
   point: string
   ratingBox: boolean
}

export const InterViewMeBox = (props: Props) => {
   let point = ''
   if (!props.ratingBox) {
      switch (props.point) {
         case 'office':
            point = description.studentPortfolio.office
            break
         case 'ready_to_move':
            point = description.studentPortfolio.ready_to_move
            break
         case 'remote':
            point = description.studentPortfolio.remote
            break
         case 'hybrid':
            point = description.studentPortfolio.hybrid
            break
         case 'any':
            point = description.studentPortfolio.any
            break
         case 'uop':
            point = description.studentPortfolio.uop
            break
         case 'b2b':
            point = description.studentPortfolio.b2b
            break
         case 'uz_uod':
            point = description.studentPortfolio.uz_uod
            break
         case 'yes':
            point = description.studentPortfolio.yes
            break
         case 'no':
            point = description.studentPortfolio.no
            break
         default:
            point = props.point
      }
   }

   return (
      <BoxContainer>
         <p>{props.boxTitle}</p>
         {props.ratingBox ? (
            <p>
               <span>{props.point}</span> / 5
            </p>
         ) : (
            <p>
               <span>
                  {
                     // props.point
                     point
                  }
               </span>
            </p>
         )}
      </BoxContainer>
   )
}
