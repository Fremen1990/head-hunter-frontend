import React, { useEffect } from 'react'
import { HeaderContainer } from './Header.styles'
import { UserBox } from './UserBox/UserBox'
import { Logo } from '../commons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../features/user/userActions'

export const Header = () => {
   const { userInfo, userToken } = useSelector((state) => state.user)
   const dispatch = useDispatch()

   // automatically authenticate user if token is found
   useEffect(() => {
      if (userToken) {
         dispatch(getUserDetails())
      }
   }, [userToken, dispatch])

   return (
      <HeaderContainer>
         <div>
            <Logo />
            <UserBox />
         </div>
      </HeaderContainer>
   )
}
