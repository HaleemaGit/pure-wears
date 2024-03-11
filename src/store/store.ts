// // import { configureStore, Middleware } from '@reduxjs/toolkit';
// // import logger from 'redux-logger';
// // import * as rootReducer from './root-reducer';
// // const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [logger] : [];

// // const store = configureStore({
// //   reducer: rootReducer,
// //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
// //   devTools: process.env.NODE_ENV !== 'production',
// // });

// // export default store;

// // src/store/store.ts
// import { configureStore, Middleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import rootReducer from './root-reducer'; // Import the root reducer directly

// const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [logger] : [];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;


// store.ts
import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
