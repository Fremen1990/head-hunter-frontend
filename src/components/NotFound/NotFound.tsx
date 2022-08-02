import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
   header: string
   description: string
   to: string
   linkText: string
}

export const NotFound = ({ header, description, to, linkText }: Props) => {
   return (
      <>
         <h1>{header}</h1>
         <p>{description}</p>
         <NavLink to={to}> {linkText} </NavLink>
      </>
   )
}
