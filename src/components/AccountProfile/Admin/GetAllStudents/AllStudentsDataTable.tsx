import * as React from 'react'
import '../../../../index.css'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import { FilterSectionBox } from '../../../recruiters/FilterSection/FilterSection.styles'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
   allStudents: any
}

export const AllStudentsDataTable = ({ allStudents }: Props) => {
   const [search, setSearch] = useState('')

   const columns: string[] = [
      'NO',
      'First Name',
      'Last Name',
      'GitHub Username',
      'Student Status',
      'Target City',
      'Expected Salary',
      'Education',
      'Courses',
      'Commercial Exp',
      'Completion',
      'Engagement',
      'Project',
      'Team Project',
      'tel',
   ]

   const handleInputChange = (e) => {
      setSearch(e.target.value)
   }

   const clearSearch = async () => {
      await setSearch('')
   }

   return (
      <>
         {allStudents !== null ? (
            <>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     width: '100%',
                     padding: '10px',
                  }}
               >
                  <label style={{ paddingBottom: '20px' }}>
                     <FilterSectionBox>
                        <form>
                           <h2>
                              Szukaj po imieniu, nazwisku bądź nicku GitHub:
                           </h2>
                           <label className={'search'}>
                              <BsSearch />
                              <input
                                 onChange={handleInputChange}
                                 type={'text'}
                                 value={search}
                                 placeholder="Imię / Nazwisko / GitHub"
                              />
                              <div>
                                 {search.length > 0 && (
                                    <AiOutlineClose onClick={clearSearch} />
                                 )}
                              </div>
                           </label>
                        </form>
                     </FilterSectionBox>
                  </label>
                  <Paper sx={{ width: '1500', overflow: 'hidden' }}>
                     <TableContainer sx={{ maxHeight: 800 }}>
                        <Table stickyHeader aria-label="sticky table">
                           <TableHead>
                              <TableRow>
                                 {columns.map((column, i) => (
                                    <TableCell
                                       key={i}
                                       style={{
                                          fontSize: 12,
                                          fontWeight: 'bold',
                                       }}
                                    >
                                       {column}
                                    </TableCell>
                                 ))}
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {allStudents === undefined
                                 ? null
                                 : allStudents
                                      ?.filter(
                                         (row) =>
                                            row?.firstName === '' ||
                                            row?.firstName
                                               .toLowerCase()
                                               .includes(
                                                  search.toLowerCase()
                                               ) ||
                                            row?.lastName
                                               .toLowerCase()
                                               .includes(
                                                  search.toLowerCase()
                                               ) ||
                                            row?.githubUserName
                                               .toLowerCase()
                                               .includes(search.toLowerCase())
                                      )
                                      .map((row, i) => {
                                         return (
                                            <TableRow
                                               className="tableRowCustom"
                                               key={row.studentId}
                                            >
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {i + 1}
                                               </TableCell>
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.firstName}
                                               </TableCell>
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.lastName}
                                               </TableCell>
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.githubUserName}
                                               </TableCell>
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.studentStatus}
                                               </TableCell>
                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.targetWorkCity}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.expectedSalary}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.education}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.courses}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.monthsOfCommercialExp}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.courseCompletion}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.courseEngagement}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.projectDegree}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.teamProjectDegree}
                                               </TableCell>

                                               <TableCell
                                                  style={{
                                                     color: 'white',
                                                     fontSize: 12,
                                                  }}
                                               >
                                                  {row.tel}
                                               </TableCell>
                                            </TableRow>
                                         )
                                      })}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </Paper>
               </div>
            </>
         ) : null}
      </>
   )
}
