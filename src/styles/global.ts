import {createGlobalStyle} from "styled-components"

/* CSS do Ant Design */
import 'antd/dist/antd.css';
const GlobalStyle = createGlobalStyle`


    /* fonts */


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
        background: url('./images/background-image.png');
        /* background-image: url('./Assets/background-image.png'); */
        opacity: 0.5;
        z-index: -1;
    }
    .tippy-box[data-animation=fade][data-state=hidden] {
	opacity: 0
}

[data-tippy-root] {
	max-width: calc(100vw - 10px)
}

.tippy-box {
	position: relative;
	outline: 0;
	transition-property: transform, visibility, opacity;
    background: #FFFFFF;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;
    top: 2rem;
    left: 5rem;
}

.tippy-arrow {
	width: 16px;
	height: 16px;
	color: #333;
    display: none;
}

.tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1;
    color: var(--black);
    .title-tooltip{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
    }
    .value-tooltip{
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        display: flex;
        align-items: center;
        color: #1CBF84;
    }
}
.canceled{
    .tippy-content{
        .value-tooltip{
            color: var(--red) !important
        }
    }   
}
/* width */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px grey; 
  border-radius: 0px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #C6C6C6; 
  border-radius: 10px;
  border: 4px solid white;
  transition: all 0.3s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2C2E3D80;
}
.ant-dropdown {
    .ant-dropdown-menu{
        border-radius: 8px;
      .ant-dropdown-menu-item{
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        padding: 1rem;
        .sair {
            svg{
                margin-right: 8px;
    margin-bottom: -4px;
    color: var(--red);
            }
        }
      }
    }
  }
 `
  export default GlobalStyle


