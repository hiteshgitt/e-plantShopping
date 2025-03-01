import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      
      if (existingItem) {
        // If item exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    
    removeItem: (state, action) => {
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    updateQuantity: (state, action) => {
      // Extract name and amount from the payload
      const { name, amount } = action.payload;
      
      // Find the item in the cart
      const item = state.items.find(item => item.name === name);
      
      // If item exists, update its quantity
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;