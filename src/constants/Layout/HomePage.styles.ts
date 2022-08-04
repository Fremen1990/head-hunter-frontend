import styled from 'styled-components'

export const Shaky = styled.button`
   border-radius: 10px;

   &:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
   }
`

export const HomeLogo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 40px;
`
