import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../features/user/userActions'
import { UserState } from '../../../features/user/userSlice'

export const UserBox = () => {
   const { userDetails } = useSelector((state: UserState) => state.user)
   const { role } = useSelector((state) => state.user)
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLogout = () => {
      dispatch(userLogout())
      navigate('/login')
   }

   return (
      <UserContainer isOpen={isOpen}>
         <div>
            <NavLink to={'/user'}>
               <div className={'avatar'}>
                  <img
                     src={
                        userDetails?.githubUserName
                           ? `https://avatars.githubusercontent.com/${userDetails?.githubUserName}`
                           : '/assets/default_avatar/GHLogo.png'
                     }
                     alt="gitHub avatar"
                  />
               </div>
            </NavLink>
            <p>
               {role === 'student' ? (
                  <>
                     {userDetails.name} {userDetails.lastName}
                  </>
               ) : role === 'hr' ? (
                  'HR'
               ) : (
                  'Admin'
               )}
            </p>
            <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
         </div>
         {isOpen && (
            <div>
               <NavLink to={'/user'}>{description.buttons.account}</NavLink>
               <p onClick={handleLogout}>wyloguj</p>
            </div>
         )}
      </UserContainer>
   )
}
