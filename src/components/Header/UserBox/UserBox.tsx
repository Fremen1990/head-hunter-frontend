import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../features/user/userActions'

export const UserBox = () => {
   const { userInfo } = useSelector((state) => state.user)

   const [isOpen, setIsOpen] = useState<boolean>(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   // TODO To be rebuild from BE SIDE, send one array to avoid nesting
   const gitHubUserName = userInfo ? userInfo?.userDetails : null
   const gitPhoto = gitHubUserName ? gitHubUserName[0].githubUserName : null
   const firstName = gitHubUserName ? gitHubUserName[0].firstName : null
   const lastName = gitHubUserName ? gitHubUserName[0].lastName : null

   const handleLogout = () => {
      dispatch(userLogout())
      navigate('/login')
   }

   return (
      <UserContainer isOpen={isOpen}>
         <div>
            <NavLink to={'/user'}>
               <div className={'avatar'}>
                  {gitHubUserName && (
                     <img
                        src={`https://avatars.githubusercontent.com/${gitPhoto}`}
                        alt="gitHub avatar"
                        style={{
                           verticalAlign: 'middle',
                           height: 35,
                           width: 35,
                        }}
                     />
                  )}
               </div>
            </NavLink>
            <p>
               {firstName} {lastName}
            </p>
            <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
         </div>
         {isOpen && (
            <div>
               <NavLink to={'/user'}>{description.buttons.account}</NavLink>
               <button onClick={handleLogout}>
                  WYLOGUJ
                  {/* <NavLink to={'/login'}>{description.buttons.logOut}</NavLink> */}
               </button>
            </div>
         )}
      </UserContainer>
   )
}
