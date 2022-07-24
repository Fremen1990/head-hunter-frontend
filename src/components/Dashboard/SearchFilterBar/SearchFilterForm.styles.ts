import styled from 'styled-components'
import { appColors } from '../../../constants/Layout/app.colors'

export const SearchFilterBar = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: -3px;
   border-top: 2px solid ${appColors.headerColor};
   background: transparent;
   justify-content: space-between;
   width: 100%;
   height: 40px;
`

export const SearchForm = styled.form`
   display: flex;
   padding-left: 10px;
   height: 30px;
   margin-top: 5px;
   margin-left: 10px;
`

export const FilterLabel = styled.label`
   cursor: pointer;
   height: 35px;
   margin-right: 10px;
   margin-top: 5px;
   padding-top: 5px;
   padding-right: 10px;
`

export const SearchButton = styled.button`
   width: 30px;
   border: 0;

   & svg {
      margin-top: 6px;
      transform: scale(1.5);
   }
`

export const SearchInput = styled.input`
   display: flex;
   flex-direction: row;
   width: 200px;
   color: white;
   transition: 0.5s;
   margin: 5px;
   border: 0;
   background: ${appColors.backgroundColor};

   &:focus {
      width: 250px;
   }
`
