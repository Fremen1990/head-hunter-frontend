import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { StarInput } from './Input.styles'

interface Props {
   // @ts-ignore
   onChange: ({ type, payload }) => void
   name: string
   value: string
}

export const OneStarInput = (props: Props) => {
   return (
      <StarInput>
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
            {props.value} <AiFillStar />
         </label>
      </StarInput>
   )
}
