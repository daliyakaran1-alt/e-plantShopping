import { createSlice } from '@reduxjs/toolkit';

const savedCart = (() => {
  try {
    return JSON.parse(localStorage.getItem('paradise-nursery-cart') || '[]');
  } catch {
    return [];
  }
})();

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: savedCart },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find((item) => (item.id ? item.id === plant.id : item.name === plant.name));
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const payload = action.payload;
      state.items = state.items.filter((plant) => plant.id !== payload && plant.name !== payload);
    },
    updateQuantity(state, action) {
      const { name, id, quantity } = action.payload;
      const item = state.items.find((plant) => (id ? plant.id === id : plant.name === name));
      if (item) {
        item.quantity = quantity;
      }
    },
    // Aliases to maintain full compatibility across project variations
    addToCart(state, action) {
      const plant = action.payload;
      const existing = state.items.find((item) => (item.id ? item.id === plant.id : item.name === plant.name));
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload || plant.name === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((plant) => plant.id === action.payload || plant.name === action.payload);
      if (!item) return;
      if (item.quantity <= 1) {
        state.items = state.items.filter((plant) => plant.id !== action.payload && plant.name !== action.payload);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((plant) => plant.id !== action.payload && plant.name !== action.payload);
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;