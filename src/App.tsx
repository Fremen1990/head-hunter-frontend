import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { UserPage } from './pages/User.page'
import { AdminPage } from './pages/Admin.page'
import { NotFoundPage } from './pages/NotFound.page'
import { Home } from './pages/Home.page'
import { LoginPage } from './pages/Login.page'

export interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.USER_PAGE} element={<UserPage />} />
            <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
         </Routes>
      </BrowserRouter>
   )
}
