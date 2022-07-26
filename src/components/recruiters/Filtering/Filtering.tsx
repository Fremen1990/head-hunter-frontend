import React from 'react'
import {
   ButtonBox,
   FilteringBox,
   FilteringContainer,
   TitleBox,
} from './Filtering.styles'
import { Button } from '../../commons/Button/Button'
import { FilterForm } from './FilterForm/FilterForm'

interface Props {
   hiddenModal: () => void
}

export const Filtering = (props: Props) => {
   return (
      <FilteringContainer>
         <FilteringBox>
            <TitleBox>
               <p>Filtrowanie</p>
               <button className={'clearForm'}>Wyczyść wszystko</button>
            </TitleBox>
            <FilterForm />
            <ButtonBox>
               <button className={'annualBtn'} onClick={props.hiddenModal}>
                  anuluj
               </button>
               <Button buttonTitle={'Wyszukaj'} />
            </ButtonBox>
         </FilteringBox>
      </FilteringContainer>
   )
}
