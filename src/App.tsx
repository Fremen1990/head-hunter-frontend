import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { UserPage } from './pages/User.page'
import { AdminPage } from './pages/Admin.page'
import { NotFoundPage } from './pages/NotFound.page'
import { HrPage } from './pages/Hr.page'
import { LoginPage } from './pages/Login.page'

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HR_PAGE} element={<HrPage />} />
            <Route path={ROUTES.USER_PAGE} element={<UserPage />} />
            <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   )
}
