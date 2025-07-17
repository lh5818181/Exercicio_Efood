// src/routes/index.tsx
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'  // ajuste o caminho se necessário

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import CheckoutRoutes from '../features/checkout/CheckoutRoutes'
import { CheckoutProvider } from '../features/checkout/CheckoutContext'
import CartSidebar from '../components/CartSidebar'

export default function AppRoutes() {
  return (
    // 1) Provider global do Redux
    <Provider store={store}>
      <BrowserRouter>

        {/* 2) Sidebar de carrinho sempre montado */}
        <CartSidebar />

        {/* 3) Contexto de checkout apenas para as rotas de /checkout */}
        <CheckoutProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/checkout/*" element={<CheckoutRoutes />} />

            {/* Redireciona qualquer outra rota para a Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CheckoutProvider>

      </BrowserRouter>
    </Provider>
  )
}
