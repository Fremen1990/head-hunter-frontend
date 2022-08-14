import React, { useState } from 'react'
import { AccountContainer, AccountAvatar } from '../AccountContainer.styles'
import { AccountBox } from '../AccountBox'
import { description } from '../../../constants/description/description'
import { ImportStudents } from './ImportStudents/ImportStudents'
import { AddStudentForm } from './AddStudentForm/AddStudentForm'
import { AddHrForm } from './AddHrForm/AddHrForm'
import { ImportHr } from './ImportHr/ImportHr'
import { GetAllUsers } from './GetAllUsers/GetAllUsers'
import { GetAllStudents } from './GetAllStudents/GetAllStudents'
import { GetAllHr } from './GetAllHr/GetAllHr'
import { GenerateTestUsers } from './ImportTestStudents/GenerateTestUsers'
import { BsFillPersonCheckFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaFileImport } from 'react-icons/fa'
import { TbDatabaseImport } from 'react-icons/tb'
import { BiShow } from 'react-icons/bi'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { SiShowpad } from 'react-icons/si'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { AdminBtnContainer } from './Admin.styles'

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
            <button onClick={() => handleToggleFeature(1)}>
               <p>Dodaj nowego studenta</p>
               <BsFillPersonCheckFill />
               <div></div>
            </button>
            <button onClick={() => handleToggleFeature(2)}>
               <p>{description.buttons.addHr}</p>
               <BsFillPersonLinesFill />
            </button>

            <button onClick={() => handleToggleFeature(3)}>
               <p>{description.buttons.importStudents}</p>
               <FaFileImport />
            </button>

            <button onClick={() => handleToggleFeature(4)}>
               <p>{description.buttons.importHr}</p>
               <TbDatabaseImport />
            </button>

            <button onClick={() => handleToggleFeature(5)}>
               <p>Pokaż wszystkich użytkowników</p>
               <BiShow />
            </button>
            <button onClick={() => handleToggleFeature(6)}>
               <p>Pokaż wszystkich studentów</p>
               <HiOutlinePresentationChartLine />
            </button>
            <button onClick={() => handleToggleFeature(7)}>
               <p>Pokasz wszystkich HR</p>
               <SiShowpad />
            </button>
            <button onClick={() => handleToggleFeature(8)}>
               <p>Dodaj 100 testowych studentów</p>
               <AiOutlineAppstoreAdd />
            </button>
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
