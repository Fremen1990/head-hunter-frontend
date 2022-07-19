import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import {
   AvailableStudents,
   ForInterview,
   Home,
   Login,
   StudentPortfolio,
} from './pages'
import FilterModalElement from './components/FilterModal/FilterModalElement'
import UserItemElement from './components/UserItem/UserItemElement'

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

            {/* --------- FilterModal component route----------- **/}
            <Route
               path={`${ROUTES.AVAILABLE_STUDENTS}/filter-modal`}
               element={<FilterModalElement> Filter modal </FilterModalElement>}
            />
            {/* --------- FilterModal component route----------- **/}

            {/* --------- UserItem component route----------- **/}
            <Route
               path={`${ROUTES.AVAILABLE_STUDENTS}/user-item`}
               element={<UserItemElement>User item</UserItemElement>}
            />
            {/* --------- UserItem component route----------- **/}
         </Routes>
      </BrowserRouter>
   )
}
export default App
