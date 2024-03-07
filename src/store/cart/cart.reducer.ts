import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryItem } from '../categories/category.types';
import { CartItem } from './cart.types';

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<CategoryItem>) => {
      const { cartItems } = state;
      const productToAdd = action.payload;

      const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<CategoryItem>) => {
      const { cartItems } = state;
      const cartItemToRemove = action.payload;

      const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

      if (existingCartItem && existingCartItem.quantity === 1) {
        state.cartItems = cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
      } else if (existingCartItem) {
        existingCartItem.quantity -= 1;
      }
    },
    clearItemFromCart: (state, action: PayloadAction<CategoryItem>) => {
      const { cartItems } = state;
      const cartItemToClear = action.payload;

      state.cartItems = cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
    },
  },
});

export const { setIsCartOpen, setCartItems, addItemToCart, removeItemFromCart, clearItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
