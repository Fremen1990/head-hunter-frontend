import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
   return (
      <>
         <h1>404</h1>
         <p> Not found page</p>
         <NavLink to={'/'}> home </NavLink>
      </>
   )
}
