import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    { id: 1, title: 'product 1'},
    { id: 2, title: 'product 2'},
  ],
  reducers: {
    addToCart: (state, action) => {
      /* TODO: Implementar esta función para añadir nuevos productos al carrito de compras */
      console.log('AddToCart', action)
    },
    removeFromCart: (state, action) => {
      console.log('removeFromCart')
    },
    clearCart: (state) => {
      console.log('clearCart')
    }
  }
})

// Exportando el estado inicial y a los reducers del slice
export default cartSlice.reducer 

export const { addToCart, removeToCart, clearCart } = cartSlice.actions