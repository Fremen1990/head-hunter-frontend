import React, { ChangeEvent } from 'react'
import {
   BoxContainer,
   ErrorExtendedLayoutMessage,
} from '../../EditStudentPortfolio.styles'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Input } from '../InputBox.styles'

interface Props {
   layout: string
   title: string
   error?: any
   validation?: UseFormRegisterReturn
   method: (e: ChangeEvent<HTMLInputElement>) => void
   value: number
}

export const NumberInputBox = ({
   title,
   method,
   layout,
   error,
   validation,
   value,
}: Props) => {
   return layout === 'simple' ? (
      <label>
         <p>{title}</p>
         <Input type="number" onChange={method} value={value} />
      </label>
   ) : (
      <BoxContainer>
         <p>{title}</p>
         <Input
            type="number"
            {...validation}
            onChange={method}
            min={0}
            value={value}
         />
         {error && (
            <ErrorExtendedLayoutMessage>
               {error.message}
            </ErrorExtendedLayoutMessage>
         )}
      </BoxContainer>
   )
}
