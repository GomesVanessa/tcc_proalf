import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'maria_lucia' ;
        src: url('./Fonts/Maria_lucia.ttf') format('truetype');
    }
    html,
    body,
    #root, 
    #App{
        height: 100%;
    }
`;

export default GlobalStyle;
