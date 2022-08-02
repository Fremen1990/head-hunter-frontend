import React from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'
import { useSelector } from 'react-redux'
import { UserState } from '../../../features/user/userSlice'

export const User = () => {
   const { userDetails } = useSelector((state: UserState) => state.user)
   // const { firstName, lastName, githubUserName, studentStatus } = userDetails
   return (
      <AccountContainer>
         <AccountAvatar
            src={
               userDetails
                  ? `https://avatars.githubusercontent.com/${userDetails?.githubUserName}`
                  : 'https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png'
            }
            alt="avatar profilu użytkownika"
         />
         <AccountBox
            accountName={`${userDetails?.firstName} ${userDetails?.lastName}`}
         />
         <div className="container-box">
            <h3>Status</h3>
            <p>{userDetails?.studentStatus}</p>
            <Button buttonTitle="Zmień status" />
         </div>
      </AccountContainer>
   )
}
