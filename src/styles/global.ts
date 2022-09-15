import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #000000;
        --red: #FF0000;
        --shape: #FFFFFF;
        --white-symbol: #FFFCFC;
        --gray: #D9D9D9;
        --title: #282828;
        --subtitle: #333232;
        --text: #282828;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media screen and (max-width: 1080px){
            font-size: 95.00%;
        }

        @media screen and (max-width: 720px){
            font-size: 80%;

            .text {
                padding-left: 20%;
            }

            .background {
                display: none;
            }

            
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

`;
