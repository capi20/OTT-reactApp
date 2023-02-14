import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    * {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: system-ui;
        box-sizing: border-box;
    }

`;

export default StyledGlobal;
