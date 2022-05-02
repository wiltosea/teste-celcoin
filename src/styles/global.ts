import {createGlobalStyle} from "styled-components"

/* CSS do Ant Design */
import 'antd/dist/antd.css';
const GlobalStyle = createGlobalStyle`


    /* fonts */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
    font-family: 'Poppins', sans-serif;
    }
    
    :root {
        --red: #EF0C35;
        --blue: #00A8FF;
        --green: #00C851;
        --black: #303B5B;
        --darkgray: #C1C4CE;
        --gray: #EFF2F9;
        --lightgray: #EDF1F8;
        --white: #FFFFFF;
        --orange: #FF6B00;
    }


    body {
        height: 100vh;
        background: linear-gradient(140deg, #1042DD 0%, #24B0A8 100%);
    }

    body:after {
        content: '';
        display: block;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        /* background: url('../images/background-image.png'); */
        background-image: url('./Assets/background-image.png');
        opacity: 0.5;
        z-index: -1;
    }

 `
  export default GlobalStyle


