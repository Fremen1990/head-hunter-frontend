import React, { useState } from 'react'
import { UserContainer } from './UserBox.styles'
import { AiOutlineCaretDown } from 'react-icons/ai'

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
               <p>konto</p>
               <p>wyloguj</p>
            </div>
         )}
      </UserContainer>
   )
}
