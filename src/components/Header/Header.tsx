import React from 'react'
import { HeaderContainer } from './Header.styles'
import { UserBox } from './UserBox/UserBox'
import { Logo } from './Logo/Logo'

export const Header = () => {
   return (
      <HeaderContainer>
         <div>
            <Logo />
            <UserBox />
         </div>
      </HeaderContainer>
   )
}
