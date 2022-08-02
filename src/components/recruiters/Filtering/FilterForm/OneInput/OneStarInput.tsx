import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { StarInput } from './Input.styles'

type DispatchType = {
   type: string
   payload: EventTarget | HTMLInputElement
}

interface Props {
   onChange: (arg0: DispatchType) => void
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
