import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const plant = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === plant.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // Update quantity
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;