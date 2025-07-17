// src/routes/index.tsx
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'

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
        {/* 2) CheckoutProvider engloba o CartSidebar e as rotas de checkout */}
        <CheckoutProvider>
          {/* 3) Sidebar global do carrinho */}
          <CartSidebar />

          {/* 4) Definição de rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/checkout/*" element={<CheckoutRoutes />} />

            {/* 5) Qualquer outra rota redireciona para Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CheckoutProvider>
      </BrowserRouter>
    </Provider>
  )
}
