import React from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'

interface Props {
   children: React.ReactNode
}

export const Admin = ({ children }: Props) => {
   return (
      <AccountContainer>
         <AccountAvatar
            src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'Admin'} />
         {children}
      </AccountContainer>
   )
}
