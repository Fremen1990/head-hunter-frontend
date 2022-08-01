import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../../features/user/userActions'

export const UserBox = () => {
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
               <div className={'avatar'}></div>
            </NavLink>
            <p>User Name </p>
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
