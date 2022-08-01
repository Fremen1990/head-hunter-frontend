import { LogoContainer } from './Logo.styles'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
   logoWidth?: string
}
export const Logo = (props: Props) => {
   return (
      <NavLink className="button" to="/">
         <LogoContainer logoWidth={props.logoWidth}>
            <img
               src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
               alt="MegaK Logo"
            />
         </LogoContainer>
      </NavLink>
   )
}
