import React, { useState } from 'react'
import {
   ImportButton,
   ImportButtonsContainer,
   ImportContainer,
} from '../ImportStudents/ImportStudents.styles'
import { FormTitle } from '../AddHrForm/AddHrForm.styles'
import { Spinner } from '../../../commons/Spinner/Spinner'
import { generateTestUsers } from '../../../../apiCalls'
import {
   ButtonOK,
   Heading,
   MessageModalContainer,
   MessageTitle,
   UsersList,
} from '../MessageModal/MessageModal'

export const GenerateTestUsers = () => {
   const [testUsers, setTestUsers] = useState(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const handleGenerateTestUsers = async () => {
      setIsLoading(true)
      const testUsers = await generateTestUsers()
      await setTestUsers(testUsers)
      setIsLoading(false)
   }

   return (
      <>
         {isLoading ? <Spinner /> : null}
         <ImportContainer>
            <FormTitle>Utwórz testowych fake userów</FormTitle>
            <ImportButtonsContainer>
               <ImportButton
                  method={handleGenerateTestUsers}
                  buttonTitle="Stwórz studentów"
               />
            </ImportButtonsContainer>

            {testUsers !== null ? (
               <MessageModalContainer>
                  <Heading>Test students created! 😊</Heading>
                  <MessageTitle color="green">
                     Created new users number: {testUsers?.length}
                  </MessageTitle>

                  <MessageTitle>Created users list:</MessageTitle>
                  <ul>
                     {testUsers?.map((testUser) => (
                        <UsersList key={testUser.id}>
                           {testUser.email}
                        </UsersList>
                     ))}
                  </ul>

                  <ButtonOK
                     method={() => setTestUsers(null)}
                     style={{
                        background: 'green',
                        color: 'white',
                        fontSize: 20,
                     }}
                     buttonTitle="OK"
                  />
               </MessageModalContainer>
            ) : null}
         </ImportContainer>
      </>
   )
}
