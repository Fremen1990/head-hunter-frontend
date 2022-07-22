import React from 'react'
import {
   AccountContainer,
   AccountAvatar,
} from '../../../constants/Layout/AccountContainer.styles'

export const User = () => {
   return (
      <AccountContainer>
         <AccountAvatar
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar profilu użytkownika"
         />
         <div className="container-box"></div>
      </AccountContainer>
   )
}
