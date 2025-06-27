
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItemData } from '../../../src/data/menuItems'

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
      state.isOpen = true
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
  },
})

export const { addItem, removeItem, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
