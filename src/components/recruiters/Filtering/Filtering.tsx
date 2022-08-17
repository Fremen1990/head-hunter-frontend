import React from 'react'
import { description } from '../../../constants/description/description'
import { FilteringBox, FilteringContainer, TitleBox } from './Filttering.styles'
import { FilterForm } from './FilterForm/FilterForm'

interface Props {
   hiddenModal: () => void
   filterState: string
   refreshStudents: () => void
}

export const Filtering = ({
   filterState,
   hiddenModal,
   refreshStudents,
}: Props) => {
   return (
      <FilteringContainer>
         <FilteringBox>
            <TitleBox>
               <p>{description.filterModal.filterName}</p>
            </TitleBox>
            <FilterForm
               hiddenModal={hiddenModal}
               filterState={filterState}
               refreshStudents={refreshStudents}
            />
         </FilteringBox>
      </FilteringContainer>
   )
}
