import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx';

export const store = configureStore({
  reducer: { cart: cartReducer },
});

store.subscribe(() => {
  try {
    localStorage.setItem('paradise-nursery-cart', JSON.stringify(store.getState().cart.items));
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
});