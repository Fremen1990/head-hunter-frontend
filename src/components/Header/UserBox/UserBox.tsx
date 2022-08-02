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
                           : `https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png`
                     }
                     alt="gitHub avatar"
                     style={{
                        verticalAlign: 'middle',
                        height: 35,
                        width: 35,
                     }}
                  />
               </div>
            </NavLink>
            <p>
               {userDetails?.firstName} {userDetails?.lastName}
            </p>
            <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
         </div>
         {isOpen && (
            <div>
               <NavLink to={'/user'}>{description.buttons.account}</NavLink>
               <button onClick={handleLogout}>WYLOGUJ</button>
            </div>
         )}
      </UserContainer>
   )
}
