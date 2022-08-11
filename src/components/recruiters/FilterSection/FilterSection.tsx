import React, { useState } from 'react'
import { FilterSectionBox } from './FilterSection.styles'
import { Button } from '../../commons/Button/Button'
import { Filtering } from '../Filtering/Filtering'
import { BsSearch } from 'react-icons/bs'
import { description } from '../../../constants/description/description'
import { Search } from '../../commons/modals/Search/Serarch'
import { HrCandidateListResponse } from 'types'

interface Props {
   students: HrCandidateListResponse[]
   refreshStudents: () => void
   layout: string
}

export const FilterSection = ({ students, refreshStudents, layout }: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [openModal, setOpenModal] = useState<boolean>(false)

   isOpen || openModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '')

   document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === ' ' || e.key === 'Spacebar')) {
         setOpenModal(true)
      }
   })

   return (
      <FilterSectionBox>
         <form>
            <label
               onClick={() => setOpenModal(true)}
               className={'search'}
               htmlFor={'search'}
            >
               <BsSearch />
               <input
                  id={'search'}
                  type={'text'}
                  placeholder={`${description.inputsFields.filterPlaceholder} | ctrl + space`}
                  disabled
               />
            </label>
         </form>
         <Button
            method={() => setIsOpen(!isOpen)}
            buttonTitle={description.buttons.filter}
         />
         {isOpen && <Filtering hiddenModal={() => setIsOpen(!isOpen)} />}
         {openModal && (
            <Search
               students={students}
               closeSearchBox={setOpenModal}
               refreshStudents={refreshStudents}
               layout={layout}
            />
         )}
      </FilterSectionBox>
   )
}
