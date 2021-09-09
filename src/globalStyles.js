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

    input, select {
        width: 13rem;
        border: none;
        background-color: hsl(0, 0%, 95%);
        border-radius: 5px;
        padding: 0.75rem 1rem;
        text-align: center;
    }
`;

export default GlobalStyles