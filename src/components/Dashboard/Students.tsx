import React from 'react'
import { OneTab, StudentsTabs, Text } from './Students.style'

// export interface IStudentsElement {
//   children: React.ReactNode
// }

export const StudentsNavigation = () => {
   return (
      <StudentsTabs>
         <OneTab>
            <Text>Dostępni kursanci</Text>
         </OneTab>
         <OneTab>
            <Text>Do rozmowy</Text>
         </OneTab>
      </StudentsTabs>
   )
}
