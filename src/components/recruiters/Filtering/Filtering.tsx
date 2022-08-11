import React from 'react'
import { description } from '../../../constants/description/description'
import { FilteringBox, FilteringContainer, TitleBox } from './Filttering.styles'
import { FilterForm } from './FilterForm/FilterForm'

interface Props {
   hiddenModal: () => void
}

export const Filtering = ({ hiddenModal }: Props) => (
   <FilteringContainer>
      <FilteringBox>
         <TitleBox>
            <p>{description.filterModal.filterName}</p>
         </TitleBox>
         <FilterForm hiddenModal={hiddenModal} />
      </FilteringBox>
   </FilteringContainer>
)
