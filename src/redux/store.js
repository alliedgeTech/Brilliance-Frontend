import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
