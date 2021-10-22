import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #e52e4d;
        --purple: #5429cc;
        --green: #33cc95;
        
        --purple-light:#6933ff;
        
        --text-title: #363f5f;
        --text-body: #969cb3;
        
        --background: #f0f2f4;
        --shape: #ffffff
    }
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media(max-width:1080px){
            font-size: 93.75%;
        }
        @media(max-width:720px){
            font-size: 83.5%;
        }
    }

    html, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{ 
        cursor: pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }


`