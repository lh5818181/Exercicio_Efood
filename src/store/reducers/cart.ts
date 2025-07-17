import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItemData } from '../../data/menuItems'

export interface CartItem extends MenuItemData {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItemData>) => {
      const exists = state.items.find(i => i.id === action.payload.id)
      if (exists) {
        exists.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.isOpen = true  // abre o sidebar ao adicionar
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    resetCart: (state) => {
      state.items = []    // limpa o carrinho
      state.isOpen = false
    },
  },
})

export const {
  addItem,
  removeItem,
  openCart,
  closeCart,
  resetCart,    // ação para resetar carrinho
} = cartSlice.actions

export default cartSlice.reducer
