import React from 'react'
import { FilterModal } from './filterModal.style'

export interface IContainerElement {
   children: React.ReactNode
}

const FilterModalElement: React.FunctionComponent<IContainerElement> = ({
   children,
   ...restProps
}) => {
   return <FilterModal {...restProps}>{children}</FilterModal>
}

export default FilterModalElement
