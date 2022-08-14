import React from 'react'
import { useDispatch } from 'react-redux'
import { userChangeStatus } from '../../../features/user/userActions'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { Button } from '../../commons/Button/Button'
import { description } from '../../../constants/description/description'
import {
    DescriptionContainer,
    GitHubContainer,
    GithubIcon,
    MailIcon,
    PhoneIcon,
    RowContainer,
} from './AsideUserBox.styles'

interface Props {
   firstName: string
   lastName: string
   githubNick: string
   phone: string
   email: string
   desc: string
   role: string
}

export const AsideUserBox = ({
   firstName,
   lastName,
   githubNick,
   phone,
   email,
   role,
   desc,
}: Props) => {
   const { disinterest, hired } = description.buttons
   const { aboutMe } = description.studentPortfolio

   const { userDetails } = useAppSelector((state: RootState) => state.user)
   const dispatch = useDispatch()
   const handleDisinterests = () => {
      toast.error('Brak zainteresowania', {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      })
   }
   const handleHire = async () => {
      await dispatch(userChangeStatus())
      toast.success('Zmieniono status na zatrudniony!', {
         position: 'top-center',
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      })
   }

   return (
      <>
         <img
            src={
               githubNick
                  ? `https://avatars.githubusercontent.com/${githubNick}`
                  : '/assets/default_avatar/GHLogo.png'
            }
            alt="gitHub avatar"
         />
         <h2>
            {firstName} {lastName}
         </h2>
         <GitHubContainer
            as="a"
            href={`https://github.com/${githubNick}`}
            target="_blank"
            rel="noopener noreferrer"
         >
            <GithubIcon />
            {githubNick}
         </GitHubContainer>
         <RowContainer>
            <PhoneIcon /> <p>{phone}</p>
         </RowContainer>
         <RowContainer>
            <MailIcon /> <p>{email}</p>
         </RowContainer>
         <DescriptionContainer>
            <p>{aboutMe}</p>
            <div>{desc}</div>
         </DescriptionContainer>
         {role === 'hr' ? (
            <Button buttonTitle={disinterest} method={handleDisinterests} />
         ) : null}
         {userDetails.studentStatus !== 'employed' && (
            <Button buttonTitle={hired} method={handleHire} />
         )}
      </>
   )
}
