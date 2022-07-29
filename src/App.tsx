import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { UserPage } from './pages/User.page'
import { AdminPage } from './pages/Admin.page'
import { NotFoundPage } from './pages/NotFound.page'
import { LoginPage } from './pages/Login.page'
import { HrPage } from './pages/Hr.page'
import ProtectedRoute from './routing/ProtectedRoute'

export interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HR_PAGE} element={<HrPage />} />
            <Route path={ROUTES.USER_PAGE} element={<UserPage />} />

            <Route element={<ProtectedRoute />}>
               <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            </Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   )
}
