import React from 'react'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import {
   FilterLabel,
   SearchButton,
   SearchFilterForm,
   SearchInput,
   SearchLabel,
} from './SearchFilterForm.styles'

export const SearchFilter = () => {
   return (
      <SearchFilterForm>
         <SearchLabel>
            <SearchButton>
               <BiSearch />
            </SearchButton>
            <SearchInput placeholder="Szukaj..." />
         </SearchLabel>

         <FilterLabel>
            <SearchButton>
               <BiFilterAlt />
            </SearchButton>
            Filtrowanie
         </FilterLabel>
      </SearchFilterForm>
   )
}
