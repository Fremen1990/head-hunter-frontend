import React, { ChangeEvent } from 'react'
import {
   BoxContainer,
   ErrorExtendedLayoutMessage,
} from '../EditStudentPortfolio.styles'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
   layout: string
   title: string
   error?: any
   validation?: UseFormRegisterReturn
   method: (e: ChangeEvent<HTMLInputElement>) => void
}

export const NumberInputBox = ({
   title,
   method,
   layout,
   error,
   validation,
}: Props) => {
   return layout === 'simple' ? (
      <label>
         <p>{title}</p>
         <input type="number" onChange={method} />
      </label>
   ) : (
      <BoxContainer>
         <p>{title}</p>
         <input type="number" {...validation} onChange={method} />
         {error && (
            <ErrorExtendedLayoutMessage>
               {error.message}
            </ErrorExtendedLayoutMessage>
         )}
      </BoxContainer>
   )
}
