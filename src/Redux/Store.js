import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './ContactsSlice';
import { filterSlice } from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
