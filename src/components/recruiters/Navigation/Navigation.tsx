import React from 'react'
import { Tab, StudentsTabs } from './Navigation.styles'

interface NavigationInterface {
   setToInterview: (arg: boolean) => void
}

export const StudentsNavigation = ({ setToInterview }: NavigationInterface) => {
   return (
      <StudentsTabs>
         <Tab onClick={() => setToInterview(false)}>Dostępni kursanci</Tab>
         <Tab onClick={() => setToInterview(true)}>Do rozmowy</Tab>
      </StudentsTabs>
   )
}
