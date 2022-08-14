import styled from 'styled-components'

export const AdminBtnContainer = styled.div`
   display: flex;
   justify-content: center;
   background-color: transparent;
   width: 100%;
   flex-wrap: wrap;

   & button {
      position: relative;
      width: 150px;
      height: 120px;
      margin: 5px;
      border: 1px solid rgba(255, 255, 255, 0.49);
      border-radius: 4px;
      color: white;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 2px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
      transition: 0.3s;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      & > p {
         background-color: #292a2b;
         //background-color: transparent;

         //margin-top: 5px;
      }

      &:hover {
         & > svg {
            color: black;
            font-size: 5rem;
         }
      }

      &:nth-child(1):hover {
         background-color: dodgerblue;
      }

      &:nth-child(2):hover {
         background-color: #f9cd0b;
      }

      &:nth-child(3):hover {
         background-color: blueviolet;
      }

      &:nth-child(4):hover {
         background-color: #6eecc1;
      }

      &:nth-child(5):hover {
         background-color: orangered;
      }

      &:nth-child(6):hover {
         background-color: yellowgreen;
      }

      &:nth-child(7):hover {
         background-color: steelblue;
      }

      &:nth-child(8):hover {
         background-color: red;
      }
      & > svg {
         position: absolute;
         top: 50%;
         right: 50%;
         background-color: transparent;
         font-size: 3.7rem;
         transform: translate(50%, -50%);
         margin-bottom: 5px;
         transition: 0.3s;
      }
   }
`
