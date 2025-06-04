import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { CartProvider } from '../src/components/contexts/CartContext';
import GlobalStyles from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);
root.render(
  <>
    <GlobalStyles />
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </>
);
