import React, { useState } from 'react'
import { AvatarBox, ButtonsBox, InfoBox, UserContainer } from './OneUser.styles'
import { Button } from '../../commons/Button/Button'
import { AiOutlineCaretDown } from 'react-icons/ai'

export const OneUser = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
      <UserContainer>
         <div>
            <InfoBox>
               <p>rezerwacja do</p>
               <p>11.07.2022 r</p>
            </InfoBox>
            <AvatarBox>
               <div className="avatar"></div>
               <p>Jan kowalski</p>
            </AvatarBox>
         </div>
         <ButtonsBox isOpen={isOpen}>
            <Button buttonTitle={'pokaż CV'} />
            <Button buttonTitle={'brak zainteresowania'} />
            <Button buttonTitle={'zatrudiony'} />
            <AiOutlineCaretDown onClick={() => setIsOpen(!isOpen)} />
         </ButtonsBox>
      </UserContainer>
   )
}
