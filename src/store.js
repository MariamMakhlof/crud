import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userReducer'

const persistUsers = (storeApi) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith('users/')) {
    try {
      window.localStorage.setItem('crud-users', JSON.stringify(storeApi.getState().users));
    } catch {
      // Keep the CRUD demo usable when browser storage is unavailable.
    }
  }

  return result;
};

const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistUsers),
});

export default store;
