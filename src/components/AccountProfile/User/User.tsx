import React from 'react'
import { AccountAvatar, AccountContainer } from '../AccountContainer.styles'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'
import { UserState } from '../../../features/user/userSlice'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'

export const User = () => {
   const { userDetails } = useAppSelector((state: UserState) => state.user)

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

         <div
            className="container-box"
            style={{ flexDirection: 'row', padding: 20 }}
         >
            {/* Student CV */}
            <NavLink to="/user/profile" style={{ margin: '30px' }}>
               {/* <studentPortfolio /> */}
               <Button buttonTitle="Twoje CV" />
            </NavLink>
            {/* Update CV */}
            <NavLink to="/user/edit">
               {/* <EditStudentPortfolioModal /> */}
               <Button buttonTitle="Zaktualizuj dane" />
            </NavLink>
         </div>
      </AccountContainer>
   )
}
