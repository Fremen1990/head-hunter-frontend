import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { description } from '../../../constants/description/description'

export const UserBox = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

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
               <NavLink to={'/login'}>{description.buttons.logOut}</NavLink>
            </div>
         )}
      </UserContainer>
   )
}
