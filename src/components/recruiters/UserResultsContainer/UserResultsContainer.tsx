import React, { useState } from 'react'
import { OneUser } from '../OneUser/OneUser'
import { ResultsContainer } from './UserResultsContainer.styles'
import ReactPaginate from 'react-paginate'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

interface Props {
   students: []
   layout: string
   refreshStudents: () => void
}

export const UserResultsContainer = ({
   layout,
   students,
   refreshStudents,
}: Props) => {
   const [pageNumber, setPageNumber] = useState(0)
   const [userPerPage, setUserPerPage] = useState(25)

   const pagesVisited = pageNumber * userPerPage
   const pageCount = Math.ceil(students.length / userPerPage)
   const changePage = ({ selected }) => {
      setPageNumber(selected)
   }

   const studentsToDisplay = students
      .slice(pagesVisited, pagesVisited + userPerPage)
      .map((items: any) => (
         <OneUser
            layout={layout}
            key={items.id}
            student={items}
            refreshStudents={refreshStudents}
         />
      ))

   return (
      <ResultsContainer>
         {studentsToDisplay}
         <div className="paginationBox">
            <label>
               <select onChange={(e) => setUserPerPage(Number(e.target.value))}>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                  <option value={students.length}>Wszystkie</option>
               </select>
            </label>
            <ReactPaginate
               pageCount={pageCount}
               previousLabel={<MdNavigateBefore />}
               nextLabel={<MdNavigateNext />}
               onPageChange={changePage}
               previousClassName={'prevButton'}
               nextClassName={'nextButton'}
               containerClassName={'containerPagination'}
               disabledClassName={'disabledPagination'}
               activeClassName={'activePagination'}
            />
         </div>
      </ResultsContainer>
   )
}
