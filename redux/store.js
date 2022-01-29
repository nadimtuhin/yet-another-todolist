import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import taskReducer from './tasksSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = {
  tasks: taskReducer,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
