import React from 'react'
import { useSelector } from 'react-redux'
import { NotAuthorized } from '../pages/NotAuthorized'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { Spinner } from '../components/commons/Spinner/Spinner'
import { Header } from '../components/Header/Header'
import { PageContainer } from '../constants/Layout/Container.styles'
import { User } from '../components/AccountProfile/User/User'

interface Props {
   allowedRoles: string[]
}

// initialize role from local storage
// const role = localStorage.getItem('userRole')
//    ? localStorage.getItem('userRole')
//    : null

const ProtectedRoute = ({ allowedRoles }: Props) => {
   const role = useAppSelector((state) => state.user.role)
   const isFetching = useAppSelector((state) => state.user.isFetching)

   const rolesArray = Array(role)
   return rolesArray?.find((r) => allowedRoles.includes(r)) ? (
      <Outlet />
   ) : isFetching ? (
      <>
         <Header />
         <PageContainer>
            <Spinner />
         </PageContainer>
      </>
   ) : (
      <NotAuthorized />
   )
}
export default ProtectedRoute
