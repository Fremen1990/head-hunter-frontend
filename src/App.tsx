import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { UserPage } from './pages/User.page'
import { AdminPage } from './pages/Admin.page'
import { NotFoundPage } from './pages/NotFound.page'
import { LoginPage } from './pages/Login.page'
import { HrPage } from './pages/Hr.page'
import ProtectedRoute from './routing/ProtectedRoute'
import { RegisterPage } from './pages/Register.page'
import { HomePage } from './pages/HomePage'

export interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.STUDENT_REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

            <Route element={<ProtectedRoute allowedRoles={['hr']} />}>
               <Route path={ROUTES.HR_PAGE} element={<HrPage />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['student']} />}>
               <Route path={ROUTES.USER_PAGE} element={<UserPage />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
               <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
