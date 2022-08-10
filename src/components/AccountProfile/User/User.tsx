import React, { useEffect } from 'react'
import { AccountAvatar, AccountContainer } from '../AccountContainer.styles'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'

export const User = () => {
   const navigate = useNavigate()

   const { userDetails } = useAppSelector((state: RootState) => state.user)
   if (userDetails?.firstLogin) {
      navigate('/user/edit')
   }

   const handleChangePassword = () => {
      navigate('/auth/send-reset-password-link')
   }

   return (
      <AccountContainer>
         <AccountAvatar
            src={
               userDetails.githubUserName
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

         <div
            className="container-box"
            style={{
               flexDirection: 'row',
               gap: '40px',
               flexWrap: 'wrap',
               padding: '20px 0',
            }}
         >
            <NavLink to="/user/profile">
               <Button buttonTitle="Twoje CV" />
            </NavLink>

            <NavLink to="/user/edit">
               <Button buttonTitle="Zaktualizuj dane" />
            </NavLink>

            <Button method={handleChangePassword} buttonTitle="Zmień hasło" />
         </div>
      </AccountContainer>
   )
}
