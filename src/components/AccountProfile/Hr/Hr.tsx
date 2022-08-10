import React from 'react'
import {
   AccountAvatar,
   AccountContainer,
   UtilsMenuBox,
   UtilsMenu,
} from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'
import { IoPersonAdd, IoCreate } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export const Hr = () => {
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
                  <p> Zarezerwuj rozmowę </p>
               </UtilsMenuBox>
            </NavLink>
            <UtilsMenuBox>
               <IoCreate />
               <p> Zmień Hasło</p>
            </UtilsMenuBox>
         </UtilsMenu>
      </AccountContainer>
   )
}
