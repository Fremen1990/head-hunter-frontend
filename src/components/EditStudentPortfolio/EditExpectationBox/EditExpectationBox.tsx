import React from 'react'
import { BoxContainer } from './EditExpectationBox.styles'

interface Props {
   title: string
}

export const EditExpectationBox = ({ title }: Props) => {
   return (
      <BoxContainer>
         <p>{title}</p>
         <p>
            <input type="text" />
         </p>
      </BoxContainer>
   )
}
