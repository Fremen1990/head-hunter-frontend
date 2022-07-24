import React from 'react'
import { Button } from '../../commons/Button/Button'

import {
   DescriptionContainer,
   GitHubContainer,
   GithubIcon,
   MailIcon,
   PhoneIcon,
   RowContainer,
} from './AsideUserBox.styles'

interface Props {
   name: string
   phone: string
   email: string
   desc: string
}

export const AsideUserBox = (props: Props) => {
   return (
      <>
         <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar użytkownika"
         />
         <p>Jan Kowalski</p>
         <GitHubContainer>
            <GithubIcon />
            <a href="https://github.com/">{props.name}</a>
         </GitHubContainer>
         <RowContainer>
            <PhoneIcon /> <p>{props.phone}</p>
         </RowContainer>
         <RowContainer>
            <MailIcon /> <p>{props.email}</p>
         </RowContainer>
         <DescriptionContainer>
            <p>O mnie</p>
            <div>{props.desc}</div>
         </DescriptionContainer>
         <Button buttonTitle="Brak zaintersowania" />
         <Button buttonTitle="Zatrudniony" />
      </>
   )
}
