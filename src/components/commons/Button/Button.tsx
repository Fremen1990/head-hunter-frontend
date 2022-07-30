import React from 'react'
import { PrimaryButton } from './Button.styles'

interface Props {
   buttonTitle: string
   method?: () => void
}

export const Button = ({ method, buttonTitle }: Props) => {
   return <PrimaryButton onClick={method}>{buttonTitle}</PrimaryButton>
}
