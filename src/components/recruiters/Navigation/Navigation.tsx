import React, { useState } from 'react'
import { Button, NavBar } from './Navigation.styles'

interface NavigationInterface {
   filterState: (filter: string) => void
}

export function NavigationBar(props: NavigationInterface) {
   const [activeButton, setActiveButton] = useState(false)

   return (
      <>
         <NavBar>
            <Button
               active={activeButton}
               onClick={() => props.filterState('availableStudents')}
            >
               do rozmowy
            </Button>
            <Button
               active={activeButton}
               onClick={() => props.filterState('toReview')}
            >
               zarezrowani
            </Button>
         </NavBar>
      </>
   )
}
