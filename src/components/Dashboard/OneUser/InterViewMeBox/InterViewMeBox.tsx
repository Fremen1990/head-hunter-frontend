import React from 'react'
import { BoxContainer } from './InterViewMeBox.styles'

interface Props {
   boxTitle: string
   point: string
   ratingBox: boolean
}

export const InterViewMeBox = (props: Props) => {
   return (
      <BoxContainer>
         <p>{props.boxTitle}</p>
         {props.ratingBox ? (
            <p>
               <span>{props.point}</span> / 5
            </p>
         ) : (
            <p>
               <span>{props.point}</span>
            </p>
         )}
      </BoxContainer>
   )
}
