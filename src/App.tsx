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
import { StudentPortfolioPage } from './pages/StudentPortfolio.page'
import { EditStudentPortfolioModal } from './components/commons/modals/StudentPortfolio/EditStudentPortfolioModal'
import { ChangePasswordPage } from './pages/ChangePassword.page'
import { ForgotPasswordPage } from './pages/ForgotPassword.page'
import { StudentPortfolioEditPage } from './pages/StudentPortfolioEdit.page'
import { CandidateCvPage } from './pages/CandidateCv.page'


export interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
               path={ROUTES.CHANGE_PASSWORD}
               element={<ChangePasswordPage />}
            />
            <Route
               path={ROUTES.FORGOT_PASSWORD}
               element={<ForgotPasswordPage />}
            />
            <Route path={ROUTES.STUDENT_REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

            <Route element={<ProtectedRoute allowedRoles={['hr', 'admin']} />}>
               <Route path={ROUTES.HR_PAGE} element={<HrPage />} />
               <Route
                  path={ROUTES.CANDIDATE_PAGE}
                  element={<CandidateCvPage />}
               />
            </Route>

            <Route
               element={<ProtectedRoute allowedRoles={['student', 'admin']} />}
            >
               <Route path={ROUTES.USER_PAGE} element={<UserPage />} />
               <Route
                  path={ROUTES.USER_PORTFOLIO_PAGE}
                  element={<StudentPortfolioPage />}
               />
               <Route
                  path={ROUTES.USER_PORTFOLIO_EDIT}
                  element={<StudentPortfolioEditPage />}
               />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
               <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
