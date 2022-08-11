import React from 'react'
import { Button } from '../../../commons/Button/Button'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/store'

interface MessageType {
   newUsersCounter: number
   duplicatedUsersCounter: number
   createdUsers: string[]
   message: string
   duplicatedUsers: string[]
}

interface Props {
   message: MessageType
   setMessageModalVisible: () => void
}

export const MessageModalContainer = styled.div`
   padding: 20px;
   top: 25vh;
   width: 25%;
   max-height: 70vh;
   overflow: scroll;
   overflow-x: hidden;
   position: absolute;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   text-align: center;
`

export const Heading = styled.h1`
   color: white;
   font-size: 24px;
`

export const MessageTitle = styled.h2`
   color: ${(props) => (props.color === 'green' ? 'green' : 'white')};
   font-size: 14px;
   margin: 10px;
`

export const MessageNumber = styled(MessageTitle)`
   color: ${(props) => (props.color === 'red' ? 'red' : 'green')};
   display: inline;
`

export const UsersList = styled.li`
   list-style-type: none;
   font-size: 12px;
`

export const ButtonOK = styled(Button)`
   margin: 30px;
`

export const MessageModal = ({ setMessageModalVisible }: Props) => {
   const message = useSelector((state: RootState) => state.admin.message)

   return (
      <MessageModalContainer>
         <Heading>Import Success! 😊</Heading>
         <MessageTitle color="green">
            Created new users number: {message?.newUsersCounter}
         </MessageTitle>
         <MessageTitle>
            Duplicated users number:
            <MessageNumber color="red">
               {message?.duplicatedUsersCounter}
            </MessageNumber>
         </MessageTitle>

         <MessageTitle>Message:</MessageTitle>
         <MessageTitle color="green">{message?.message}</MessageTitle>

         {message?.createdUsers !== [] ? (
            <>
               <MessageTitle>Created users list:</MessageTitle>
               <ul>
                  {message?.createdUsers?.map((createdUser, i) => (
                     <UsersList key={i}>{createdUser}</UsersList>
                  ))}
               </ul>
            </>
         ) : null}

         {message?.duplicatedUsers !== [] ? (
            <>
               <MessageTitle>Duplicated users:</MessageTitle>
               <ul>
                  {message?.duplicatedUsers?.map((createdUser, i) => (
                     <UsersList key={i}>{createdUser}</UsersList>
                  ))}
               </ul>

               <ButtonOK
                  method={() => setMessageModalVisible(false)}
                  style={{ background: 'green', color: 'white', fontSize: 20 }}
                  buttonTitle="OK"
               />
            </>
         ) : null}
      </MessageModalContainer>
   )
}
