import React, { useRef, useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../features/user/userActions'
import { UserState } from '../../../features/user/userSlice'
import useClickOutside from '../../../utils/clickOutsideHook'
import { useAppSelector } from '../../../app/hooks'

export const UserBox = () => {
   const { role, userDetails } = useAppSelector(
      (state: UserState) => state.user
   )
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const userMenu = useRef(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLogout = () => {
      dispatch(userLogout())
      navigate('/login')
   }

   useClickOutside(userMenu, () => setIsOpen(false))

   return (
      <UserContainer isOpen={isOpen} ref={userMenu}>
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
               <NavLink to={'/user'} onClick={() => setIsOpen(false)}>
                  {description.buttons.account}
               </NavLink>
               <p onClick={handleLogout}>{description.buttons.logOut}</p>
            </div>
         )}
      </UserContainer>
   )
}
