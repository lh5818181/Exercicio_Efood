import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);
