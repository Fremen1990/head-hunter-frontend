import React, { ChangeEvent } from 'react'
import {
   BoxContainer,
   ErrorExtendedLayoutMessage,
   ErrorSimpleLayoutMessage,
} from '../EditStudentPortfolio.styles'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
   layout: string
   title: string
   error?: any
   validation?: UseFormRegisterReturn
   method: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputTextBox = ({
   title,
   method,
   layout,
   validation,
   error,
}: Props) => {
   return layout === 'simple' ? (
      <label>
         <p>{title}</p>
         <input type="text" {...validation} onChange={method} />
         {error && (
            <ErrorSimpleLayoutMessage>{error.message}</ErrorSimpleLayoutMessage>
         )}
      </label>
   ) : (
      <BoxContainer>
         <p>{title}</p>
         <input type="text" {...validation} onChange={method} />
         {error && (
            <ErrorExtendedLayoutMessage>
               {error.message}
            </ErrorExtendedLayoutMessage>
         )}
      </BoxContainer>
   )
}
