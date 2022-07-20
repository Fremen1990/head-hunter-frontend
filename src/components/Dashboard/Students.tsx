import React from 'react'
import { Tab, StudentsTabs, Text } from './Students.style'

export const StudentsNavigation = () => {
   return (
      <StudentsTabs>
         <Tab>
            <Text>Dostępni kursanci</Text>
         </Tab>
         <Tab>
            <Text>Do rozmowy</Text>
         </Tab>
      </StudentsTabs>
   )
}
