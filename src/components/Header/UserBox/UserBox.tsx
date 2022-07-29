import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { description } from '../../../constants/description/description'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/user/userSlice'

export const UserBox = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   return (
      <UserContainer isOpen={isOpen}>
         <div>
            <div className={'avatar'}></div>
            <p>User Name </p>
            <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
         </div>
         {isOpen && (
            <div>
               <NavLink to={'/user'}>{description.buttons.account}</NavLink>
               <button
                  onClick={() => {
                     dispatch(logout())
                     navigate('/login')
                  }}
               >
                  WYLOGUJ
                  {/* <NavLink to={'/login'}>{description.buttons.logOut}</NavLink> */}
               </button>
            </div>
         )}
      </UserContainer>
   )
}
