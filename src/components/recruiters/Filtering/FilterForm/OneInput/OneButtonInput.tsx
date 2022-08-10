import React from 'react'
import { ButtonInput } from './OneInput.styles'

interface Props {
   // @ts-ignore
   onChange: ({ type: string, payload }) => void
   name: string
   value: string
   inputName: string
}

export const OneButtonInput = ({ onChange, name, value, inputName }: Props) => (
   <ButtonInput>
      <input
         type="checkbox"
         id={`${name}${value}`}
         name={name}
         value={value}
         onChange={(e) =>
            onChange({
               type: `${name.toUpperCase()}_UPDATE`,
               payload: e.target,
            })
         }
      />
      <label htmlFor={`${name}${value}`}>{inputName}</label>
   </ButtonInput>
)
