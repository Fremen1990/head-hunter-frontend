import React from 'react'
import { NavLink } from 'react-router-dom'
import { AccountBox } from '../AccountBox'
import { IoPersonAdd, IoCreate } from 'react-icons/io5'
import { description } from '../../../constants/description/description'
import {
   AccountAvatar,
   AccountContainer,
   UtilsMenuBox,
   UtilsMenu,
} from '../AccountContainer.styles'

export const Hr = () => {
   const { changePwd, bookCall } = description.buttons
   return (
      <AccountContainer>
         <AccountAvatar
            src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'HR'} />
         <UtilsMenu>
            <NavLink to="/hr">
               <UtilsMenuBox>
                  <IoPersonAdd />
                  <p> {bookCall} </p>
               </UtilsMenuBox>
            </NavLink>
            <NavLink to="/auth/change-password">
               <UtilsMenuBox>
                  <IoCreate />
                  <p>{changePwd}</p>
               </UtilsMenuBox>
            </NavLink>
         </UtilsMenu>
      </AccountContainer>
   )
}
