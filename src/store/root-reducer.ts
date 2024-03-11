// import { combineReducers } from 'redux';
// import { userReducer } from './user/user.reducer';
// import categoriesReducer from './categories/category.reducer';
// import cartReducer from './cart/cart.reducer';

// const rootReducer = combineReducers({
//   user: userReducer,
//   categories: categoriesReducer,
//   cart: cartReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// src/store/root-reducer.ts
import { combineReducers } from 'redux';
import {userReducer} from './user/user.reducer'; // Import the user reducer
import categoriesReducer from './categories/category.reducer'; // Import the categories reducer
import cartReducer from './cart/cart.reducer'; // Import the cart reducer

const rootReducer:any = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
