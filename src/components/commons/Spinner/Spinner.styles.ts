import styled from 'styled-components'

export const SpinnerContainer = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(255, 255, 255, 0) 100%
   );

   & .loading_text {
      margin-top: 20px;
      font-size: 3rem;
      background-color: transparent;
      font-weight: 100;
      letter-spacing: 4px;
      color: rgb(255, 255, 255);
      animation: blink 3s ease-in-out infinite;
   }

   & .loading {
      position: relative;
      width: 100px;
      height: 100px;
      transform-style: preserve-3d;
      perspective: 800px;
      background-color: transparent;

      & .arc {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         border-radius: 50%;
         background-color: transparent;
         border-bottom: 3px solid #ff0000;
         animation: rotate1 1.15s linear infinite;
      }

      & .arc:nth-child(2) {
         border-bottom: 3px solid #a60000;
         animation: rotate2 1.15s linear infinite;
         animation-delay: -0.8s;
      }

      & .arc:nth-child(3) {
         border-bottom: 3px solid #890000;
         animation: rotate3 1.15s linear infinite;
         animation-delay: -0.4s;
      }
   }

   @keyframes rotate1 {
      from {
         transform: rotateX(35deg) rotateY(-45deg) rotateZ(0);
      }

      to {
         transform: rotateX(35deg) rotateY(-45deg) rotateZ(1turn);
      }
   }

   @keyframes rotate2 {
      from {
         transform: rotateX(50deg) rotateY(10deg) rotateZ(0);
      }

      to {
         transform: rotateX(50deg) rotateY(10deg) rotateZ(1turn);
      }
   }

   @keyframes rotate3 {
      from {
         transform: rotateX(35deg) rotateY(55deg) rotateZ(0);
      }

      to {
         transform: rotateX(35deg) rotateY(55deg) rotateZ(1turn);
      }
   }

   @keyframes blink {
      0% {
         opacity: 0.7;
      }
      50% {
         opacity: 1;
      }
      100% {
         opacity: 0.7;
      }
   }
`
