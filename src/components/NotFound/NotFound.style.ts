import styled from 'styled-components'

export const NotFoundBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 86vh;
   background-color: transparent;
   width: 100%;
   margin: 0 auto;

   & > * {
      background-color: transparent;
   }
`
export const Samurai = styled.svg`
   & > g {
      animation: hueRotate 7s ease-in-out 3s infinite;
   }
`
export const Text404 = styled.svg`
   width: 350px;

   & > g {
      animation: hueRotate 7s ease-in-out 3s infinite;
   }
`

export const ErrorMessage = styled.h2`
   font-size: 32px;
   text-transform: uppercase;
   display: block;
   margin-top: 10px;
   font-family: 'Audiowide', cursive;
   color: #12000a;
   font-weight: 300;
   text-shadow: 0 0 4px #12000a;
   animation: fadeInText 3s ease-in 3.5s forwards,
      flicker4 5s linear 7.5s infinite, hueRotate 7s ease-in-out 3s infinite;

   @keyframes fadeInText {
      1% {
         color: #12000a;
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

   @keyframes hueRotate {
      0% {
         filter: hue-rotate(0deg);
      }
      50% {
         filter: hue-rotate(-120deg);
      }
      100% {
         filter: hue-rotate(0deg);
      }
   }

   @keyframes flicker4 {
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
      animation: drawSamurai 4s forwards;
   }

   @keyframes drawSamurai {
      0% {
         fill: transparent;
      }
      100% {
         fill: black;
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
      animation: drawLine1 2s ease-in-out 0s forwards,
         flicker3 5s linear 4s infinite;
   }

   & > .zero-1 {
      stroke-dasharray: 735px;
      stroke-dashoffset: -735px;
      animation: drawLine2 2s ease-in-out 0.5s forwards,
         flicker2 5s linear 4.5s infinite;
   }

   & > .four-2 {
      stroke-dasharray: 940px;
      stroke-dashoffset: -940px;
      animation: drawLine1 2s ease-in-out 0.8s forwards,
         flicker1 5s linear 5s infinite;
   }

   @keyframes drawLine1 {
      0% {
         stroke-dashoffset: -940px;
      }
      100% {
         stroke-dashoffset: 0;
      }
   }
   @keyframes drawLine2 {
      0% {
         stroke-dashoffset: -735px;
      }
      100% {
         stroke-dashoffset: 0;
      }
   }
   @keyframes flicker1 {
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
   @keyframes flicker2 {
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

   @keyframes flicker3 {
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
