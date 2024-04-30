// Reducer: son funciones que nos ayudan a transformar los estados que creamos

import { createSlice } from "@reduxjs/toolkit";

const config = {
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      // Más lógica aquí
      return state + 1
    },
    decrement: (state) => state - 1,
  }
}

export const counterSlice = createSlice(config)

// Aquí estamos exportando el estado inicial y los reducers del slice
export default counterSlice.reducer

// Exportamos las acciones
export const { increment, decrement } = counterSlice.actions
