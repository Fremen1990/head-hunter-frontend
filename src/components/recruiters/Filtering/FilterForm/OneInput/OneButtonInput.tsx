import React from 'react'
import { ButtonInput } from './OneInput.styles'

interface Props {
   // @ts-ignore
   onChange: ({ type: string, payload }) => void
   name: string
   value: string
   inputName: string
}

export const OneButtonInput = (props: Props) => {
   return (
      <ButtonInput>
         <input
            type="checkbox"
            id={`${props.name}${props.value}`}
            name={props.name}
            value={props.value}
            onChange={(e) =>
               props.onChange({
                  type: `${props.name.toUpperCase()}_UPDATE`,
                  payload: e.target,
               })
            }
         />
         <label htmlFor={`${props.name}${props.value}`}>
            {props.inputName}
         </label>
      </ButtonInput>
   )
}
