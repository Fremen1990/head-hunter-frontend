import React, { useState } from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'
import { AddHrForm } from './AddHrForm/AddHrForm'
import { Button } from '../../commons/Button/Button'
import { description } from '../../../constants/description/description'
import { ImportStudents } from './ImportStudents/ImportStudents'
import { ImportHr } from './ImportHr/ImportHr'

interface Props {
   children: React.ReactNode
}

export const Admin = ({ children }: Props) => {
   const [hrFormVisible, setHrFormVisible] = useState<boolean>(false)
   const [importStudentsVisible, setImportStudentsVisible] =
      useState<boolean>(false)
   const [importHrVisible, setImportHrVisible] = useState<boolean>(false)

   return (
      <AccountContainer>
         <AccountAvatar
            src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'Admin'} />

         {/* HR FORM TO ADD HR */}
         <Button
            onClick={() => setHrFormVisible((prevState) => !hrFormVisible)}
            buttonTitle={description.buttons.addHr}
         />
         {hrFormVisible ? <AddHrForm /> : null}

         {/* IMPORT STUDENTS */}
         <Button
            onClick={() =>
               setImportStudentsVisible((prevState) => !importStudentsVisible)
            }
            buttonTitle={description.buttons.importStudents}
         />
         {importStudentsVisible ? <ImportStudents /> : null}

         {/* IMPORT HR */}
         <Button
            onClick={() => setImportHrVisible((prevState) => !importHrVisible)}
            buttonTitle={description.buttons.importHr}
         />
         {importHrVisible ? <ImportHr /> : null}

         {children}
      </AccountContainer>
   )
}
