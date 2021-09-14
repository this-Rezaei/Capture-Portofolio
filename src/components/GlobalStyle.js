import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 body{
    background: #1b1b1b;
   font-family:'Inter',sans-serif;
 }
 button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    font-family: 'Inter',sans-serif;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius:10px;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
       background-color: #23d997;
       color: white;
    }
 }
 a{
    font-size: 1.1rem;
 }
 p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;

    @media (max-width: 1400px) {
      font-size: 1.2rem;
   }
 }
 h4{
    color: #23d997;
 }
 span{
   color: #23d997;
   font-weight: bold;
 }
   h3{
      color: white;
   }
   h2{
      font-weight: lighter;
      font-size: 3rem;

      @media (max-width: 1400px) {
         font-size: 2.5rem;
      }
   }

`;

export default GlobalStyle;
