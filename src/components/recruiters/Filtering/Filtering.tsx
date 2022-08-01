import React from 'react'
import { FilteringBox, FilteringContainer, TitleBox } from './Filtering.styles'

import { FilterForm } from './FilterForm/FilterForm'

interface Props {
   hiddenModal: () => void
   clear?: () => void
}

export const Filtering = (props: Props) => {
   return (
      <FilteringContainer>
         <FilteringBox>
            <TitleBox>
               <p>Filtrowanie</p>
            </TitleBox>
            <FilterForm hiddenModal={props.hiddenModal} />
         </FilteringBox>
      </FilteringContainer>
   )
}
