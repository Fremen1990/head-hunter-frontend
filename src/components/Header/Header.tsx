import React from 'react'
import { HeaderContainer } from './Header.styles'
import { UserBox } from './UserBox/UserBox'

export const Header = () => {
   return (
      <HeaderContainer>
         <div>
            <p>Logo</p>
            <UserBox />
         </div>
      </HeaderContainer>
   )
}
