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
   allUsers: any
}

export const AllUsersDataTable = ({ allUsers }: Props) => {
   const [search, setSearch] = useState('')

   const columns: string[] = [
      'Email',
      'Role',
      'Active',
      'ID',
      'Created At',
      'Updated At',
   ]

   const handleInputChange = (e) => {
      setSearch(e.target.value)
   }
   const clearSearch = () => {
      setSearch('')
   }

   return (
      <>
         {allUsers !== null ? (
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
                           <h2>Szukaj po adresie email bądź roli:</h2>
                           <label className={'search'}>
                              <BsSearch />
                              <input
                                 onChange={handleInputChange}
                                 type={'text'}
                                 value={search}
                                 placeholder="Email / Role"
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
                  <Paper sx={{ width: '1000px', overflow: 'hidden' }}>
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
                              {allUsers
                                 ?.filter(
                                    (row) =>
                                       row.email === '' ||
                                       row.email
                                          .toLowerCase()
                                          .includes(search.toLowerCase()) ||
                                       row.role
                                          .toLowerCase()
                                          .includes(search.toLowerCase())
                                 )
                                 .map((row) => {
                                    return (
                                       <TableRow
                                          className="tableRowCustom"
                                          key={row.email}
                                       >
                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.email}
                                          </TableCell>
                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.role}
                                          </TableCell>
                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.active === true
                                                ? 'Active'
                                                : 'Inactive'}
                                          </TableCell>
                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.id}
                                          </TableCell>
                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.created_at}
                                          </TableCell>

                                          <TableCell
                                             style={{
                                                color: 'white',
                                                fontSize: 12,
                                             }}
                                          >
                                             {row.updated_at}
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
