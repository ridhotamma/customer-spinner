import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import customerReducer from './customerSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  customer: customerReducer
});

export default rootReducer;
