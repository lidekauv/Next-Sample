import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/Colors";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0rem;
    margin: 0rem;
    font-family: 'Dosis', sans-serif;
  }
  body {
    background: lightBg;
    color: darkBold;
  }
`;
