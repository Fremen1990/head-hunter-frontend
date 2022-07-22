import React from 'react'
import {
  AccountContainer,
  AccountAvatar,
} from '../../../constants/Layout/AccountContainer.styles'
import { Button } from '../../commons/Button/Button'
import { AccountBox } from '../AccountBox'

export const User = () => {
  return (
      <AccountContainer>
         <AccountAvatar
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
            alt="avatar profilu użytkownika"
         />
         <AccountBox accountName={'Jan Kowalski'} />
         <div className="container-box">
            <h3>Status</h3>
            <p>[statusInfo]</p>
            <Button buttonTitle="Zmień status" />
         </div>
      </AccountContainer>
  )
}
