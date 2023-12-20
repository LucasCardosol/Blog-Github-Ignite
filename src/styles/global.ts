import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito' , sans-serif;
    padding-bottom: 15rem;
    line-height: 160%;
  }
  
  a{
    text-decoration: none;
    
  }
  ul{
    list-style: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 54rem;
  margin: -5.5rem auto 0 auto;
`
