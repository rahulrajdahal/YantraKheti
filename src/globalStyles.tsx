import { createGlobalStyle } from "styled-components";
import PlusJakartaBold from "assets/fonts/PlusJakartaDisplay-Bold.otf";
import PlusJakartaLight from "assets/fonts/PlusJakartaDisplay-Light.otf";
import PlusJakartaMedium from "assets/fonts/PlusJakartaDisplay-Medium.otf";
import PlusJakartaRegular from "assets/fonts/PlusJakartaDisplay-Regular.otf";

export const GlobalStyles = createGlobalStyle`
*,html,body {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: PlusJakarta;
}



@font-face {
    font-family: PlusJakarta;
    src: url(${PlusJakartaLight});
    font-weight:100;
  }

  @font-face {
    font-family: PlusJakarta;
    src: url(${PlusJakartaMedium});
    font-weight300;
  }

@font-face {
    font-family: PlusJakarta;
    font-style: normal;
    src: url(${PlusJakartaRegular});
    font-weight:500;
  }

  @font-face {
    font-family: PlusJakarta;
    src: url(${PlusJakartaBold});
    font-weight:700;
  }
`;
