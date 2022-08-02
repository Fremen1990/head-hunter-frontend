import React, { useState } from 'react'
import { NavBar, Tab } from './Navigation.styles'
import { description } from '../../../constants/description/description'

interface NavigationInterface {
   setToInterview: (arg: string) => void
}

const tabs: string[] = Object.values(description.navigation)

export function NavigationBar({ setToInterview }: NavigationInterface) {
   const [active, setActive] = useState(tabs[0])

   return (
      <>
         <NavBar>
            {tabs.map((type) => (
               <Tab
                  key={type}
                  active={active === type}
                  onClick={() => {
                     setActive(type)
                     setToInterview(active)
                  }}
               >
                  {type}
               </Tab>
            ))}
         </NavBar>
      </>
   )
}
