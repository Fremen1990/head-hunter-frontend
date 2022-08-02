import React, { useEffect } from 'react'
import { HeaderContainer } from './Header.styles'
import { UserBox } from './UserBox/UserBox'
import { Logo } from '../commons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByToken } from '../../features/user/userActions'
import { UserState } from '../../features/user/userSlice'

export const Header = () => {
   const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null

   const { currentSessionToken } = useSelector((state: UserState) => state.user)
   const dispatch = useDispatch()

   // automatically authenticate user if token is found
   useEffect(() => {
      if (currentSessionToken) {
         dispatch(fetchUserByToken())
      }
   }, [
      // currentSessionToken,
      userToken,
      dispatch,
   ])

   return (
      <HeaderContainer>
         <div>
            <Logo />
            {currentSessionToken && <UserBox />}
         </div>
      </HeaderContainer>
   )
}
