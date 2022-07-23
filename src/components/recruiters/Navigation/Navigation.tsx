import React from 'react'
import { Tab, StudentsTabs } from './Navigation.styles'

export const StudentsNavigation = () => {
   return (
      <StudentsTabs>
         <Tab>Dostępni kursanci</Tab>
         <Tab>Do rozmowy</Tab>
      </StudentsTabs>
   )
}
