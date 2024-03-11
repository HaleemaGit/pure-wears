// import { createSelector } from 'reselect';

// const selectCartReducer = (state) => state.cart;

// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen
// );

// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cart) => cart.cartItems
// );

// export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );

// export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
// );

// import { createSelector } from 'reselect';

// import  RootState  from '../store';

// import cartReducer, { CartState } from './cart.reducer'; // Import the cartReducer

// const selectCartReducer = (state: typeof RootState): CartState => state?.cart; // Ensure state is not null/undefined

// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cart) => cart?.cartItems ?? [] // Ensure cartItems is not null/undefined
// );


// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen
// );

// export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
// );

// export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
//   cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );


// cart.selector.ts

import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

// Assuming that cart.reducer.ts is in the same directory
import cartReducer from './cart.reducer';

const selectCartReducer = (state: { cart: CartState }): CartState => state?.cart; // Ensure state is not null/undefined

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart?.cartItems ?? [] // Ensure cartItems is not null/undefined
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export default cartReducer; // Exporting the cartReducer for use in the store configuration
