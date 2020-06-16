import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    font-family: Rubik, sans-serif;
    font-size: 15px;
    line-height: 1.74;
    color: ${({ theme }) => theme.palette.neutral.grey};
  }

  body.video-open {
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  ::selection {
    color: ${({ theme }) => theme.palette.neutral.white};
    background-color: ${({ theme }) => theme.palette.primary.default};
  }

  strong {
    font-weight: 500;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Rubik Light'), local('Rubik-Light'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mZ8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* hebrew */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Rubik Light'), local('Rubik-Light'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mf8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Rubik Light'), local('Rubik-Light'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2mT8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Rubik Light'), local('Rubik-Light'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Fqj2md8WD07oB-.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* hebrew */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXyw023e.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmZ8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* hebrew */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmf8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmT8WD07oB-98o.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmd8WD07oB-.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export default GlobalStyle;
