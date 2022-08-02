import React from 'react'
import { FilteringBox, FilteringContainer, TitleBox } from './Filtering.styles'
import { FilterForm } from './FilterForm/FilterForm'
import { description } from '../../../constants/description/description'

interface Props {
   hiddenModal: () => void
}

export const Filtering = (props: Props) => {
   return (
      <FilteringContainer>
         <FilteringBox>
            <TitleBox>
               <p>{description.filterModal.filterName}</p>
            </TitleBox>
            <FilterForm hiddenModal={props.hiddenModal} />
         </FilteringBox>
      </FilteringContainer>
   )
}
