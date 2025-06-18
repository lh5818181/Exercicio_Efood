import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CheckoutRoutes from '../features/checkout/CheckoutRoutes';
import { CheckoutProvider } from '../features/checkout/CheckoutContext';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <CheckoutProvider>
      <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
        <Route path="/checkout/*" element={<CheckoutRoutes />} />
      </Routes>
      </CheckoutProvider>
    </BrowserRouter>
  );
}
