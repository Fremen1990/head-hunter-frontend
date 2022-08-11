import React from 'react'
import { PrimaryButton } from './Button.styles'

interface Props {
   buttonTitle: string
   method?: () => void
   style?: {}
}

export const Button = ({ method, buttonTitle, ...restProps }: Props) => {
   return (
      <PrimaryButton onClick={method} {...restProps}>
         {buttonTitle}
      </PrimaryButton>
   )
}
