// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import CartReducer from './reducers/CartReducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const rootReducer = combineReducers({
//     cart: CartReducer,
//     // Add other reducers if needed
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };