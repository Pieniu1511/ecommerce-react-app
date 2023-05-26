import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './slice/popupSlice';
import loginSlice from './slice/loginSlice';
import productsSlice from './slice/productsSlice';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    login: loginSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
