import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --roxo: #7159D1;
    --roxoEscuro: #3C4393;
    --verde: #04d361;
    --preto: #000;
  }

  .page{
    animation: fadeIn3 0.5s;
    position: absolute;
  }

  @keyframes fadeIn3{
    0%{
      opacity: 0;
      top: 40px;
    }
    100%{
      opacity: 1;
      top: 0px;
    }
  }

  *{
    font-family: 'Roboto', sans-serif;

    ::selection {
      color: #fff;
      background-color: var(--preto);
    }
  }

  body, html {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230c0915' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2317122b' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23231c40' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%232e2556' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%233a2e6b' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
    overflow: hidden auto;
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding:0px;
    margin:0px;
  }
`;
