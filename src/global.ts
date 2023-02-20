import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`

html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  input, select, textarea {
    font-family: 'Poppins', sans-serif;
  } 

/* :root {
   --white: #ffffff;
   --black: #000000;
   --gray-100: #e1e1e6;
   --gray-300: #c4c4c4cc;
   --gray-400: #8d8d99;
   --gray-500: #333333;
   --gray-600: #1c1c1c;
   --purple-700: #0e0222;
   --purple-600: #200945;
   --purple-500: #5e60ce;
   --purple-400: #8284fa;
   --blue-200: #1e6f9f;
   --blue-100: #4ea8de;
   --SeaBlue-300: #7be7ff;
   --red-500: #f75a68;
 }
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background-color: var(--purple-600);
   color: var(--gray-300);
   -webkit-font-smoothing: antialiased;
 }

 body,
 input,
 textarea,
 button {
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 1rem;
 } */
 `;
