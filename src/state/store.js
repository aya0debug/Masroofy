// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import transactionReducer from './reducers/transactionReducer';
import categoryReducer from './reducers/categoryReducer';
import overviewReducer from './reducers/overviewReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    categories: categoryReducer,
    overviews: overviewReducer,
  },
});

export default store;
