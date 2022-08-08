import styled from 'styled-components'

export const NotFoundContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 88.7vh;
   background-color: transparent;
   width: 100%;
   margin: 0 auto;

   & > * {
      background-color: transparent;
   }
`
export const Samurai = styled.svg`
   & > g {
      animation: hue-rotate 7s ease-in-out 3s infinite;
   }
`
export const Text404 = styled.svg`
   width: 350px;

   & > g {
      animation: hue-rotate 7s ease-in-out 3s infinite;
   }
`

export const PathWrapper = styled.g`
   & > .samurai-helmet {
      stroke-width: 70px;
      filter: url(#samurai-glow);
      fill: transparent;
      animation: flicker-samurai 4s linear 2s infinite;
   }

   & > .samurai-body {
      stroke: transparent;
      stroke-width: 80px;
      fill: transparent;
      animation: draw-samurai 4s forwards;
   }

   @keyframes draw-samurai {
      0% {
         fill: transparent;
      }
      100% {
         fill: #000000;
      }
   }

   & > .four-1,
   .zero-1,
   .four-2 {
      stroke: #ff005d;
      stroke-width: 4px;
      filter: url(#text404-glow);
      fill: transparent;
   }

   & > .four-1 {
      stroke-dasharray: 940px;
      stroke-dashoffset: -940px;
      animation: draw-line-four 2s ease-in-out 0s forwards,
         flicker-four-1 5s linear 4s infinite;
   }

   & > .zero-1 {
      stroke-dasharray: 735px;
      stroke-dashoffset: -735px;
      animation: draw-line-zero 2s ease-in-out 0.5s forwards,
         flicker-zero-1 5s linear 4.5s infinite;
   }

   & > .four-2 {
      stroke-dasharray: 940px;
      stroke-dashoffset: -940px;
      animation: draw-line-four 2s ease-in-out 0.8s forwards,
         flicker-four-2 5s linear 5s infinite;
   }

   @keyframes draw-line-four {
      0% {
         stroke-dashoffset: -940px;
      }
      100% {
         stroke-dashoffset: 0;
      }
   }
   @keyframes draw-line-zero {
      0% {
         stroke-dashoffset: -735px;
      }
      100% {
         stroke-dashoffset: 0;
      }
   }
   @keyframes flicker-four-1 {
      0% {
         stroke: #ff005d;
      }
      1% {
         stroke: transparent;
      }
      3% {
         stroke: transparent;
      }
      4% {
         stroke: #ff005d;
      }
      6% {
         stroke: #ff005d;
      }
      7% {
         stroke: transparent;
      }
      13% {
         stroke: transparent;
      }
      14% {
         stroke: #ff005d;
      }
      100% {
         stroke: #ff005d;
      }
   }
   @keyframes flicker-zero-1 {
      0% {
         stroke: #ff005d;
      }
      50% {
         stroke: #ff005d;
      }
      51% {
         stroke: transparent;
      }
      61% {
         stroke: transparent;
      }
      62% {
         stroke: #ff005d;
      }
      100% {
         stroke: #ff005d;
      }
   }

   @keyframes flicker-four-2 {
      0% {
         stroke: #ff005d;
      }
      1% {
         stroke: transparent;
      }
      10% {
         stroke: transparent;
      }
      11% {
         stroke: #ff005d;
      }
      40% {
         stroke: #ff005d;
      }
      41% {
         stroke: transparent;
      }
      45% {
         stroke: transparent;
      }
      46% {
         stroke: #ff005d;
      }
      100% {
         stroke: #ff005d;
      }
   }
   @keyframes flicker-samurai {
      0% {
         stroke: #ff005d;
         filter: url(#samurai-glow);
      }
      1% {
         stroke: transparent;
         filter: none;
      }
      10% {
         stroke: transparent;
         filter: none;
      }
      11% {
         stroke: #ff005d;
         filter: url(#samurai-glow);
      }
      40% {
         stroke: #ff005d;
         filter: url(#samurai-glow);
      }
      41% {
         stroke: transparent;
         filter: none;
      }
      45% {
         stroke: transparent;
         filter: none;
      }
      46% {
         stroke: #ff005d;
         filter: url(#samurai-glow);
      }
      100% {
         stroke: #ff005d;
         filter: url(#samurai-glow);
      }
   }
`

export const ErrorMessage = styled.h2`
   font-size: 32px;
   text-transform: uppercase;
   display: block;
   margin-top: 10px;
   font-family: 'Audiowide', cursive;
   color: black;
   font-weight: 300;
   text-shadow: 0 0 4px #12000a;
   animation: fade-in-text 2s ease-in 3.5s forwards,
      flicker-error-message 5s linear 7.5s infinite,
      hue-rotate 7s ease-in-out 3s infinite;

   @keyframes fade-in-text {
      1% {
         color: black;
         text-shadow: 0 0 4px #12000a;
      }
      70% {
         color: #ff005d;
         text-shadow: 0 0 14px #ff005d;
      }
      100% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
   }

   @keyframes flicker-error-message {
      0% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      30% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      31% {
         color: #12000a;
         text-shadow: 0 0 4px #12000a;
      }
      32% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      36% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      37% {
         color: #12000a;
         text-shadow: 0 0 4px #12000a;
      }
      41% {
         color: #12000a;
         text-shadow: 0 0 4px #12000a;
      }
      42% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      85% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      86% {
         color: #12000a;
         text-shadow: 0 0 4px #12000a;
      }
      95% {
         color: #12000a;
         text-shadow: 0 0 4px #12000a;
      }
      96% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
      100% {
         color: #ff005d;
         text-shadow: 0 0 4px #ff005d;
      }
   }
`

export const HomeButton = styled.button`
   width: 250px;
   height: 60px;
   margin-top: 40px;
   background-color: transparent;
   cursor: pointer;
   border: 3px solid black;
   box-shadow: 0 0 4px #12000a;

   & > p {
      background-color: transparent;
      font-size: 32px;
      color: black;
      text-transform: uppercase;
      font-family: 'Audiowide', cursive;
      text-decoration: none;
      text-shadow: 0 0 4px #12000a;
      animation: hue-rotate 7s ease-in-out 3s infinite;
   }

   & > p:hover {
      color: #ff005d;
      text-shadow: 0 0 5px #ff005d;
   }
`
