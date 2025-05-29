import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Checkout from '../features/checkout/Checkout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
