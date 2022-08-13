import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { toast } from 'react-toastify'
import { userChangeStatus } from '../../../features/user/userActions'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'
import { AccountAvatar, AccountContainer } from '../AccountContainer.styles'

export const User = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { userDetails } = useAppSelector((state: RootState) => state.user)
   if (userDetails?.firstLogin) {
      navigate('/user/edit')
   }

   const handleChangePassword = () => {
      navigate('/auth/send-reset-password-link')
   }

   const handleStatusClick = async () => {
      try {
         await dispatch(userChangeStatus())
      } finally {
         toast.success('Status został zmieniony!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })
         setTimeout(() => {
            navigate(0)
         }, 2500)
      }
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
            {userDetails.studentStatus === 'employed' ? (
               <p>Zatrudniony</p>
            ) : (
               <p>Dostępny</p>
            )}
            <Button method={handleStatusClick} buttonTitle="Zmień status" />
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
