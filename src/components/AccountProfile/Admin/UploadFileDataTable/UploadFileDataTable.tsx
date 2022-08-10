import * as React from 'react'
import '../../../../index.css'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { UploadFileFailedInterface, UploadFileResponseInterface } from 'types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface Props {
   uploadFileData:
      | UploadFileResponseInterface
      | UploadFileFailedInterface
      | null
}

export const UploadFileDataTable = ({ uploadFileData }: Props) => {
   const [search, setSearch] = useState('')

   const columns: string[] = [
      'Email',
      'Course Completion',
      'Project Degree',
      'Team Project Degree',
      'Bonus Project URL',
   ]

   const handleInputChange = (e) => {
      setSearch(e.target.value)
   }

   return (
      <>
         {uploadFileData !== null ? (
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
                  <label style={{ padding: '20px', fontSize: 12 }}>
                     <p>Search by email:</p>
                     <input
                        type="text"
                        style={{ background: 'white' }}
                        onChange={handleInputChange}
                     />
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
                              {uploadFileData
                                 ?.filter(
                                    (row) =>
                                       row.email === '' ||
                                       row.email.includes(search)
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
                                             {row.courseCompletion}
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
                                             {row.bonusProjectUrls
                                                .split(',')
                                                ?.map((url, i) => (
                                                   <>
                                                      <a
                                                         href={url.replace(
                                                            '"',
                                                            ''
                                                         )}
                                                         target="_blank"
                                                         rel="noopener noreferrer"
                                                         style={{
                                                            color: 'green',
                                                            fontSize: 12,
                                                         }}
                                                      >
                                                         {url.replace('"', '')}
                                                      </a>
                                                      <br />
                                                   </>
                                                ))}
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
