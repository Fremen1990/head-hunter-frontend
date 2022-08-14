import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { userChangeStatus } from '../../../features/user/userActions'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'
import { description } from '../../../constants/description/description'
import { AccountAvatar, AccountContainer } from '../AccountContainer.styles'

export const User = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { userDetails } = useAppSelector((state: RootState) => state.user)
   const { studentStatus } = userDetails
   if (userDetails?.firstLogin) {
      navigate('/user/edit')
   }

   const handleChangePassword = () => {
      navigate('/auth/send-reset-password-link')
   }

   const handleStatusClick = async () => {
      await dispatch(userChangeStatus())
   }

   useEffect(() => {}, [studentStatus])

   const { available, employed } = description.status
   const { changePwd, updatedData, yourCv, changeStatus } = description.buttons

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
            {studentStatus === 'employed' ? (
               <p>{employed}</p>
            ) : (
               <p>{available}</p>
            )}
            <Button method={handleStatusClick} buttonTitle={changeStatus} />
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
               <Button buttonTitle={yourCv} />
            </NavLink>

            <NavLink to="/user/edit">
               <Button buttonTitle={updatedData} />
            </NavLink>

            <Button method={handleChangePassword} buttonTitle={changePwd} />
         </div>
      </AccountContainer>
   )
}
