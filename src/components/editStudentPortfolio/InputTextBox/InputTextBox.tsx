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
   placeholder: string
   value: string
}

export const InputTextBox = ({
   value,
   title,
   method,
   layout,
   validation,
   error,
   placeholder,
}: Props) => {
   return layout === 'simple' ? (
      <label>
         <p>{title}</p>
         <input
            value={value}
            autoFocus
            type="text"
            {...validation}
            onChange={method}
            placeholder={placeholder}
         />
         {error && (
            <ErrorSimpleLayoutMessage>{error.message}</ErrorSimpleLayoutMessage>
         )}
      </label>
   ) : (
      <BoxContainer>
         <p>{title}</p>
         <input
            value={value}
            type="text"
            {...validation}
            onChange={method}
            autoFocus
            placeholder={placeholder}
         />
         {error && (
            <ErrorExtendedLayoutMessage>
               {error.message}
            </ErrorExtendedLayoutMessage>
         )}
      </BoxContainer>
   )
}
