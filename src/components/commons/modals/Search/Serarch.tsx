import React, { useState } from 'react'
import { ResultsContainer, SearchBox, SearchContainer } from './Search.styles'
import { BsSearch } from 'react-icons/bs'
import { description } from '../../../../constants/description/description'
import { AiOutlineClose } from 'react-icons/ai'
import { OneUser } from '../../../recruiters/OneUser/OneUser'

interface Props {
   students: []
   closeSearchBox: (value: boolean) => void
   refreshStudents: () => void
   layout: string
}

export const Search = ({
   students,
   closeSearchBox,
   refreshStudents,
   layout,
}: Props) => {
   const [searchInput, setSearchInput] = useState('')

   const clearSearch = () => {
      setSearchInput('')
   }

   const toDisplay = students
      .filter((item) =>
         item.student.firstName.toLowerCase().startsWith(searchInput)
      )
      .map((items) => (
         <OneUser
            layout={layout}
            key={items.id}
            student={items}
            refreshStudents={refreshStudents}
         />
      ))

   return (
      <SearchContainer>
         <SearchBox>
            <AiOutlineClose onClick={() => closeSearchBox(false)} />
            <form>
               <label className={'search'} htmlFor={'search'}>
                  <BsSearch />
                  <input
                     id={'search'}
                     type={'text'}
                     placeholder={description.inputsFields.filterPlaceholder}
                     value={searchInput}
                     onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <div>
                     {searchInput.length > 0 && (
                        <AiOutlineClose onClick={clearSearch} />
                     )}
                  </div>
               </label>
            </form>
         </SearchBox>
         <ResultsContainer>
            {toDisplay.length < 50 && toDisplay}
         </ResultsContainer>
      </SearchContainer>
   )
}
