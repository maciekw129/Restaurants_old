import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto';

        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    li {
        list-style-type: none;
    }
`;

export default GlobalStyles