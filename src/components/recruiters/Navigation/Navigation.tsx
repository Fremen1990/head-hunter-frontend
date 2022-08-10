import React, { useState } from 'react'
import { Button, NavBar } from './Navigation.styles'
import { description } from '../../../constants/description/description'

interface NavigationInterface {
   filterState: (filter: string) => void
}

export function NavigationBar(props: NavigationInterface) {
   const [activeButton, setActiveButton] = useState({
      availableStudents: true,
      toReview: false,
   })

   const handleClick = (e: any) => {
      if (e.target.name === 'availableStudents') {
         props.filterState('availableStudents')
         setActiveButton({ availableStudents: true, toReview: false })
      }
      if (e.target.name === 'toReview') {
         props.filterState('toReview')
         setActiveButton({ availableStudents: false, toReview: true })
      }
   }

   return (
      <>
         <NavBar>
            <Button
               active={activeButton.availableStudents}
               name={'availableStudents'}
               onClick={handleClick}
            >
               {description.navigation.availableStudents}
            </Button>
            <Button
               active={activeButton.toReview}
               name={'toReview'}
               onClick={handleClick}
            >
               {description.navigation.toReview}
            </Button>
         </NavBar>
      </>
   )
}
