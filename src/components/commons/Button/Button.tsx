import React from 'react'
import { PrimaryButton } from './Button.styles'

interface Props {
   buttonTitle: string
}

export const Button = (props: Props) => {
   return <PrimaryButton>{props.buttonTitle}</PrimaryButton>
}
