import React from 'react'
import { BoxContainer } from '../EditStudentPortfolio.styles'

interface Props {
   title: string
   options: { value: string; text: string }[]
   method: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectBox = ({ title, options, method }: Props) => {
   return (
      <BoxContainer>
         <p>{title}</p>
         <select onChange={method}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.text}
               </option>
            ))}
         </select>
      </BoxContainer>
   )
}
