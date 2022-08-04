import React from 'react'
import { useSelector } from 'react-redux'
import { NotAuthorized } from '../pages/NotAuthorized'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

interface Props {
   allowedRoles: string[]
}

// initialize role from local storage
// const role = localStorage.getItem('userRole')
//    ? localStorage.getItem('userRole')
//    : null

const ProtectedRoute = ({ allowedRoles }: Props) => {
   const role = useAppSelector((state) => state.user.role)

   const rolesArray = Array(role)
   return rolesArray?.find((r) => allowedRoles.includes(r)) ? (
      <Outlet />
   ) : (
      <NotAuthorized />
   )
}
export default ProtectedRoute
