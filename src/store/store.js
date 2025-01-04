import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import userReducer from './userSlice'; // Your user slice

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers (if you have multiple reducers)
const rootReducer = combineReducers({
  user: userReducer,
  // other reducers...
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
