import { Container } from './container.style'
import React from 'react'

export interface IContainerElement {
   children: React.ReactNode
}

const ContainerElement: React.FunctionComponent<IContainerElement> = ({
   children,
   ...restProps
}) => {
   return <Container {...restProps}>{children}</Container>
}

export default ContainerElement
