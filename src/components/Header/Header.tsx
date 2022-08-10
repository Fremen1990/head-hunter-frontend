import React, { useEffect } from 'react'
import { HeaderContainer } from './Header.styles'
import { UserBox } from './UserBox/UserBox'
import { Logo } from '../commons/Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByToken } from '../../features/user/userActions'
import { useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'

export const Header = () => {
   const userToken = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null

   const { currentSessionToken } = useAppSelector(
      (state: RootState) => state.user
   )
   const dispatch = useDispatch()

   // automatically authenticate user if token is found
   useEffect(() => {
      if (userToken) {
         dispatch(fetchUserByToken())
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
