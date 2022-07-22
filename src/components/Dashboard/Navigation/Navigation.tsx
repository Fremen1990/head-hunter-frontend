import React, { useState } from 'react'
import { ButtonGroup, Tab } from './Navigation.styles'

const types = ['Dostępni studenci', 'Do rozmowy']

export function StudentsNavigation() {
   const [active, setActive] = useState(types[0])

   return (
      <>
         <ButtonGroup>
            {types.map((type) => (
               <Tab
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
               >
                  {type}
               </Tab>
            ))}
         </ButtonGroup>
      </>
   )
}
