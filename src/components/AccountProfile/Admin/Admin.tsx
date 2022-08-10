import React, { useState } from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'
import { Button } from '../../commons/Button/Button'
import { description } from '../../../constants/description/description'
import { ImportStudents } from './ImportStudents/ImportStudents'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { AddStudentForm } from './AddStudentForm/AddStudentForm'
import { AddHrForm } from './AddHrForm/AddHrForm'
import { ImportHr } from './ImportHr/ImportHr'
import { GetAllUsers } from './GetAllUsers/GetAllUsers'
import { GetAllStudents } from './GetAllStudents/GetAllStudents'
import { GetAllHr } from './GetAllHr/GetAllHr'
import { GenerateTestUsers } from './ImportTestStudents/GenerateTestUsers'

const AdminBtnContainer = styled.div`
   display: flex;
`

interface Props {
   children: React.ReactNode
}

export const Admin = ({ children }: Props) => {
   const [adminFeatureOpen, setAdminFeatureOpen] = useState(0)

   const handleToggleFeature = (featureNumber) => {
      if (adminFeatureOpen === featureNumber) {
         setAdminFeatureOpen(0)
      } else {
         setAdminFeatureOpen(featureNumber)
      }
   }

   return (
      <AccountContainer>
         <AccountAvatar
            src="https://www.clipartmax.com/png/middle/48-483031_github-logo-black-and-white-github-icon-vector.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'Admin'} />

         <AdminBtnContainer>
            <Button
               method={() => handleToggleFeature(1)}
               buttonTitle="Dodaj nowego studenta"
            />
            <Button
               method={() => handleToggleFeature(2)}
               buttonTitle={description.buttons.addHr}
            />

            <Button
               method={() => handleToggleFeature(3)}
               buttonTitle={description.buttons.importStudents}
            />

            <Button
               method={() => handleToggleFeature(4)}
               buttonTitle={description.buttons.importHr}
            />

            <Button
               method={() => handleToggleFeature(5)}
               buttonTitle="Pokaż wszystkich użytkowników"
            />
            <Button
               method={() => handleToggleFeature(6)}
               buttonTitle="Pokaż wszystkich studentów"
            />
            <Button
               method={() => handleToggleFeature(7)}
               buttonTitle="Pokasz wszystkich HR"
            />
            <Button
               method={() => handleToggleFeature(8)}
               buttonTitle="Dodaj 100 testowych studentów"
            />
         </AdminBtnContainer>

         {adminFeatureOpen === 1 ? <AddStudentForm /> : null}
         {adminFeatureOpen === 2 ? <AddHrForm /> : null}
         {adminFeatureOpen === 3 ? <ImportStudents /> : null}
         {adminFeatureOpen === 4 ? <ImportHr /> : null}
         {adminFeatureOpen === 5 ? <GetAllUsers /> : null}
         {adminFeatureOpen === 6 ? <GetAllStudents /> : null}
         {adminFeatureOpen === 7 ? <GetAllHr /> : null}
         {adminFeatureOpen === 8 ? <GenerateTestUsers /> : null}

         {children}
      </AccountContainer>
   )
}
