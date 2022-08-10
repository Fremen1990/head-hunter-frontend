import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { StarInput } from './OneInput.styles'

interface Props {
   // @ts-ignore
   onChange: ({ type, payload }) => void
   name: string
   value: string
}

export const OneStarInput = ({ onChange, name, value }: Props) => (
   <StarInput>
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
      <label htmlFor={`${name}${value}`}>
         {value} <AiFillStar />
      </label>
   </StarInput>
)
