import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        background-color: #f4f4f4;
        -webkit-box-shadow: inset 0px 0px 45px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 0px 0px 45px -10px rgba(0,0,0,0.75);
        box-shadow: inset 0px 0px 45px -10px rgba(0,0,0,0.75);
        height: 100vh;
    }
    
    h1, h2, h3, h4, h5, h6, p, a {
        margin: 0;
    }
`;

export const ContainerApp = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
