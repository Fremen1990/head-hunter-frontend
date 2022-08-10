import React, { useState } from 'react'
import { FilterSectionBox } from './FilterSection.styles'
import { Button } from '../../commons/Button/Button'
import { Filtering } from '../Filtering/Filtering'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { description } from '../../../constants/description/description'

export const FilterSection = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [search, setSearch] = useState('')

   isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')

   const handleSearch = () => setSearch('')
   const clearSearch = () => setSearch('')

   return (
      <FilterSectionBox>
         <form>
            <label className={'search'} htmlFor={'search'}>
               <BsSearch onClick={handleSearch} />
               <input
                  id={'search'}
                  type={'text'}
                  placeholder={description.inputsFields.filterPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
               <div>
                  {search.length > 0 && (
                     <AiOutlineClose onClick={clearSearch} />
                  )}
               </div>
            </label>
         </form>
         <Button
            method={() => setIsOpen(!isOpen)}
            buttonTitle={description.buttons.filter}
         />
         {isOpen && <Filtering hiddenModal={() => setIsOpen(!isOpen)} />}
      </FilterSectionBox>
   )
}
