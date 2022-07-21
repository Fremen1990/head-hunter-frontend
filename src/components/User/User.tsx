import React from 'react'
import { UserContainer, UserAvatar } from '../../constants/Layout/UserContainer'

export const User = () => {
   return (
      <UserContainer>
         <UserAvatar
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar profilu użytkownika"
         />
      </UserContainer>
   )
}
