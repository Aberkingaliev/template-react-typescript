import { userReducer } from '@/entities/User';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { 
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;