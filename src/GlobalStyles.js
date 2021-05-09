import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: 'maria_lucia' ;
        src: url('./Fonts/Maria_lucia.ttf') format('truetype');
    } */

    @font-face {
        font-family: 'Redressed', cursive;
        src: url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
    }
    html,
    body,
    #root, 
    #App{
        height: 100%;
    }
`;

export default GlobalStyle;
