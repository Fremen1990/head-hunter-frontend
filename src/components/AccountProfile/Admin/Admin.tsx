import React from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'
import { AddHumanResources } from './AddHumanResources/AddHumanResources'

export const Admin = () => {
   return (
      <AccountContainer>
         <AccountAvatar
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'Jan Kowalski'} />
         <AddHumanResources />
      </AccountContainer>
   )
}
