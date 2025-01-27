// reducers/transactionReducer.js
import {
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION,
  } from '../actions/transactionActions';
  
  const initialState = {
    transactions: [],
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TRANSACTION:
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
        };
      case DELETE_TRANSACTION:
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
      case UPDATE_TRANSACTION:
        return {
          ...state,
          transactions: state.transactions.map((transaction) =>
            transaction.id === action.payload.id
              ? { ...transaction, ...action.payload }
              : transaction
          ),
        };
      default:
        return state;
    }
  };
  export const getLast6Transactions = (state) => { 
    const transactions = state.transactions.transactions; 
    return transactions.slice(Math.max(transactions.length - 6, 0)).reverse(); 
  };
  export default transactionReducer;
  