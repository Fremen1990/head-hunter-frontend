import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AvailableStudents from './pages/AvailableStudents'
import ForInterview from './pages/ForInterview'
import StudentPortfolio from './pages/StudentPortfolio'
import * as ROUTES from './constants/routes'

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route
               path={ROUTES.AVAILABLE_STUDENTS}
               element={<AvailableStudents />}
            />
            <Route path={ROUTES.FOR_INTERVIEW} element={<ForInterview />} />
            <Route
               path={ROUTES.STUDENT_PORTFOLIO}
               element={<StudentPortfolio />}
            />
         </Routes>
      </BrowserRouter>
   )
}
// Testing eslint and lint-staged
export default App
