import React from 'react'
import { PrimaryButton } from './Button.styles'

interface Props {
   buttonTitle: string
   click?: () => void
}

export const Button = (props: Props) => {
   return <PrimaryButton>{props.buttonTitle}</PrimaryButton>
}
