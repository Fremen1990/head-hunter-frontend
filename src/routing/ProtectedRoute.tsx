import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface Props {
   allowedRoles: string[]
}

// initialize role from local storage
const role = localStorage.getItem('userRole')
   ? localStorage.getItem('userRole')
   : null

const ProtectedRoute = ({ allowedRoles }: Props) => {
   // const state = useSelector((state) => state.user)

   const rolesArray = Array(role)
   return rolesArray?.find((r) => allowedRoles.includes(r)) ? (
      <Outlet />
   ) : (
      <Navigate to="/login" />
   )
}
export default ProtectedRoute
