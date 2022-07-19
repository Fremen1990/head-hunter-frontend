import styled from 'styled-components'

export const HeaderContainer = styled.header`
   width: 100%;
   color: white;
   background: #1e1e1f;
   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
   padding: 5px 10px;

   & div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 70%;
      margin: 0 auto;
   }
`
