import React, { useRef, useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../features/user/userActions'
import useClickOutside from '../../../utils/clickOutsideHook'
import { useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'

export const UserBox = () => {
   const { role, userDetails, email } = useAppSelector(
      (state: RootState) => state.user
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
            <NavLink
               to={role === ('student' || 'admin' || 'hr') ? '/user' : ''}
            >
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
                     {userDetails?.name} {userDetails?.lastName}
                  </>
               ) : role === 'hr' ? (
                  <p>{email}</p>
               ) : role === 'admin' ? (
                  'Admin'
               ) : null}
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
