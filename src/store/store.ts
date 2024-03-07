// // import { compose, createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// // import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

// // const composeEnhancer =
// //   (process.env.NODE_ENV !== 'production' &&
// //     window &&
// //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// //   compose;

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// //   blacklist: ['user'],
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleWares),
// });

// // export const persistor = persistStore(store);

// import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares: Middleware[] = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleWares),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

// import { configureStore, Middleware, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import rootReducer from './root-reducer';

// const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [logger] : [];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares: Middleware[] = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
