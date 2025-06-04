import { createGlobalStyle } from 'styled-components';

export const Cores = {
  vermelhoClaro: '#E66767',
  bege: '#FFF8F2',
  branca: '#fff',
  cinza: '#333',
  cinzaClaro: '#666',
}

export default createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
body {
    font-family: 'Roboto', sans-serif;
    background: ${Cores.bege};
  }

      .container {
      max-width: 1366px;
      margin: 0 auto;
      width: 100%;
  }
`;