import { createGlobalStyle } from "styled-components";
import fundo from "../assets/fundo.jpg"
export default createGlobalStyle`
  @import url('https://fonts.googleapi.com/css?family=Roboto:100,300,400,500&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font:12px 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root{
    height: 100%;
  }

 body{
   background: url(${fundo}) right;
   background-size: 100%;
   height:auto;
   background-repeat: no-repeat
  
 }

 input{
   border-style: solid;
   background: none;
   font-size: 14pt;
   width: 300px;
 }
 section{
   text-align: center;
   align-items: center;
   background: rgba(127,255,212,0.3);
   border-radius:75%;
 }
 button{
  border-style: solid;
  background: none;
  font-size: 14pt;
  cursor: pointer;
 }

a{
  color: purple;
  text-decoration: none;
}

`;
