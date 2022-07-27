import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { StarInput } from './OneInput.styles'

interface Props {
   onChange: (e: any) => void
   name: string
   value: string
}

export const OneInput = (props: Props) => {
   return (
      <StarInput>
         <input
            type="checkbox"
            id={`${props.name}${props.value}`}
            name={props.name}
            value={props.value}
            onChange={(e) => props.onChange(e)}
         />
         <label htmlFor={`${props.name}${props.value}`}>
            {props.value} <AiFillStar />
         </label>
      </StarInput>
   )
}
