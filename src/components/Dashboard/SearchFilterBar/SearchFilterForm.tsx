import React, { SyntheticEvent } from 'react'
import { BiFilterAlt, BiSearch } from 'react-icons/bi'
import {
   FilterLabel,
   SearchButton,
   SearchFilterBar,
   SearchInput,
   SearchForm,
} from './SearchFilterForm.styles'

export const SearchFilter = () => {
   const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault()
   }
   return (
      <SearchFilterBar>
         <SearchForm onSubmit={handleSubmit}>
            <SearchButton>
               <BiSearch />
            </SearchButton>
            <SearchInput placeholder="Szukaj..." />
         </SearchForm>

         <FilterLabel>
            <SearchButton>
               <BiFilterAlt />
            </SearchButton>
            Filtrowanie
         </FilterLabel>
      </SearchFilterBar>
   )
}
