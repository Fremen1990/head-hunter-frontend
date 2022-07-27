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
import { description } from '../../../constants/description/description'

interface Props {
   name: string
   phone: string
   email: string
   desc: string
}

export const AsideUserBox = (props: Props) => {
   const { disinterest, hired } = description.buttons
   const { aboutMe } = description.studentPortfolio

   return (
      <>
         <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar użytkownika"
         />
         <h2>jan kowalski</h2>
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
            <p>{aboutMe}</p>
            <div>{props.desc}</div>
         </DescriptionContainer>
         <Button buttonTitle={disinterest} />
         <Button buttonTitle={hired} />
      </>
   )
}
