import React from 'react'
import { AccountAvatar, AccountContainer } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'

export const Hr = () => {
   return (
      <AccountContainer>
         <AccountAvatar
            src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
            alt="avatar profilu użytkownika"
         />

         <AccountBox accountName={'HR'} />
      </AccountContainer>
   )
}
