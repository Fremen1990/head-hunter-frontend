import styled from 'styled-components'

export const ResultsContainer = styled.section`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 999;
   background-color: rgba(0, 0, 0, 0.9);
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;

  & .closeButton {
    position: relative;
    top: 10px;
    background-color: transparent;
    font-size: 3rem;
    color: red;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: rotate(-180deg);
    }
`
export const ResultsBox = styled.div`
   position: relative;
   background-color: black;
   width: 70%;
   margin-top: 50px;
`
