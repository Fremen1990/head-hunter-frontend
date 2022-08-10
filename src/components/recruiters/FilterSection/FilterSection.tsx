import React, { useState } from 'react'
import { FilterSectionBox } from './FilterSection.styles'
import { Button } from '../../commons/Button/Button'
import { Filtering } from '../Filtering/Filtering'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { description } from '../../../constants/description/description'

interface Props {
   setSearch: (value: string) => void
}

export const FilterSection = ({ setSearch }: Props) => {
   const [isOpen, setIsOpen] = useState(false)
   const [searchInput, setSearchInput] = useState('')

   isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')

   const clearSearch = () => {
      setSearchInput('')
      setSearch('')
   }

   const handleChange = (value: string) => {
      setSearchInput(value)
      setSearch(value)
   }

   return (
      <FilterSectionBox>
         <form>
            <label className={'search'} htmlFor={'search'}>
               <BsSearch />
               <input
                  id={'search'}
                  type={'text'}
                  placeholder={description.inputsFields.filterPlaceholder}
                  value={searchInput}
                  onChange={(e) => handleChange(e.target.value)}
               />
               <div>
                  {searchInput.length > 0 && (
                     <AiOutlineClose onClick={clearSearch} />
                  )}
               </div>
            </label>
         </form>
         <Button
            method={() => setIsOpen(!isOpen)}
            buttonTitle={description.buttons.filter}
         ></Button>
         {isOpen && <Filtering hiddenModal={() => setIsOpen(!isOpen)} />}
      </FilterSectionBox>
   )
}
