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

export const ChangePasswordLogo = (props: Props) => {
   return (
      <NavLink className="button" to="/">
         <LogoContainer logoWidth={props.logoWidth}>
            <img
               src="https://cdn.discordapp.com/attachments/998337403586621460/1006105343463526400/unknown.png"
               alt="Change Password Logo"
            />
         </LogoContainer>
      </NavLink>
   )
}
