import React, { ChangeEvent } from 'react'
import { BoxContainer } from '../EditExpectationBox/EditExpectationBox.styles'

interface Props {
   layout: string
   title: string

   method: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NumberInputBox = ({ title, method, layout }: Props) => {
   return layout === 'simple' ? (
      <label>
         <p>{title}</p>
         <input type="number" onChange={method} />
      </label>
   ) : (
      <BoxContainer>
         <p>{title}</p>
         <input type="number" onChange={method} />
      </BoxContainer>
   )
}
