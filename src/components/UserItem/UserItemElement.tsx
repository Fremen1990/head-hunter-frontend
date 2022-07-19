import React from 'react'
import { UserItem } from './UserItem.style'

export interface IContainerElement {
   children: React.ReactNode
}

const UserItemElement: React.FunctionComponent<IContainerElement> = ({
   children,
   ...restProps
}) => {
   return <UserItem {...restProps}>{children}</UserItem>
}

export default UserItemElement
