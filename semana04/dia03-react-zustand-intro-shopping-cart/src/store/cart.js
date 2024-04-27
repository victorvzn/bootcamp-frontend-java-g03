import { create } from 'zustand'

export const useCartStore = create((set) => ({
  // Estado INCIAL
  cart: [],

  // Actions
  addToCart: (newProduct) => {
    // Aquí estrá la lógica para añadir un producto al estado 'cart'

    // Aquí es cuando el producto ya existe en el carrito de compras
    // ???

    // Aquí es cuando el producto es nuevo en el carrito de compras
    set(state => ({
      cart: [...state.cart, { ...newProduct, quantity: 1 }]
    }))
  },
  removeFromCart: (id) => {
    set(state => {
      const newProducts = state.cart.filter(product => product.id !== id)

      return { cart: newProducts }
    })
  },
  cleanCart: () => {
    set(() => ({ cart: [] }))
  }
}))