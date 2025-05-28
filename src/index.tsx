
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { CartProvider } from '../src/components/contexts/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);
root.render(
  <CartProvider>
    <AppRoutes />
  </CartProvider>
);
