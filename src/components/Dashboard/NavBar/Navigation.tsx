import React, { useState } from 'react'
import { NavBar, Tab } from './Navigation.styles'

const types = ['Dostępni studenci', 'Do rozmowy']

export function NavBar() {
   const [active, setActive] = useState(types[0])

   return (
      <>
         <NavBar>
            {types.map((type) => (
               <Tab
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
               >
                  {type}
               </Tab>
            ))}
         </NavBar>
      </>
   )
}
